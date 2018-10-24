// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = function (userInfo) {
    let users = getUsers();
    users.push({
        account: userInfo.account,
        password: userInfo.password
    });
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const doLogin = function (name, password) {
    uni.request({
		url: 'http://local.toupai.com/v1/app/manage-voice/login', //仅为示例，并非真实接口地址。
		data: {
			name: name,
			password: password,
		},
		header: {
			'custom-header': 'hello' //自定义请求头信息
		},
		success: (res) => {
			console.log(res.data);
		}
	});
    // uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

export default {
    getUsers,
    addUser,
	doLogin
}
