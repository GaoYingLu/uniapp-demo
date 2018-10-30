var config = require ("./config.js");


// 管理账号信息
const USERS_KEY = 'USERS_KEY';

const login = function (name, password) {
    return request('/v1/app/manage-voice/login', {name: name, password: password});
}

const getNewsList = function () {
    return request('/v1/app/manage-voice/list', {type: 'news'});
}

const getScheduleList = function () {
    return request('/v1/app/manage-voice/list', {type: 'schedule'});
}

const setLoginUser = function (userInfo) {
    uni.setStorageSync(USERS_KEY, userInfo);
}

const getLoginUser = function () {
    return uni.getStorageSync(USERS_KEY);
}

const logout = function () {
    uni.setStorageSync(USERS_KEY, '');
}

const request = function (uri, data, method='POST') {
	var userInfo = getLoginUser();
	if (userInfo.token) {
		data.token = userInfo.token;
	}
  return new Promise(function (reslove, reject) {
	uni.request({
		url: config.domain + uri,
		method: 'POST',
		data: data,
		dataType: 'json',
		header: {
			'content-type': method == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
		},

		success: response => {
			var result = response.data;
			if (result.code != 10000) {
				if (result.code == 11001){//用户Token失效 重新登录
					uni.navigateTo({
						url: '../login/login'
					});
					
				}else{
					reject({ code: result.code, error: result.msg });
				}
			} else if (result.code == 10000) {
				reslove(result.data);
			} else {
				reslove();
			}	
		},
		fail: () => {
			reject({ code: 50000, error: "网络错误!" });
		}
	});
    
  });
}


export default {
	getNewsList,
	getScheduleList,
    login,
	logout,
	setLoginUser,
	getLoginUser
}
