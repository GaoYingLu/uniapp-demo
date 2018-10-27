<template>
    <view class="content">
        <view v-if="userInfo.name" class="hello">
            <view class="title">
                您好 {{userInfo.name}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-else class="hello">
            <view class="title">
				
                您好,游客,本 App 须登录后使用。
            </view>
            <view class="ul">
                <view>请先登录！</view>
            </view>
        </view>
    </view>
</template>

<script>
	import service from '../../service.js';
	
    export default {
		data:{
			userInfo:{},
			newsList:{}
		},
        onLoad() {
			var userInfo = service.getLoginUser();
			console.log(userInfo);
            if (userInfo) {
				this.$data.userInfo = userInfo;	
            } else {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					* 如果需要强制登录，不显示取消按钮
					*/
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							* 如果需要强制登录，使用reLaunch方式
							*/
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
        }
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50px;
    }

    .ul {
        font-size: 30px;
        color: #8f8f94;
        margin-top: 50px;
    }

    .ul>view {
        line-height: 50px;
    }
</style>
