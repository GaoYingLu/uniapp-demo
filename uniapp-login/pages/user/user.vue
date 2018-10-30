<template>
    <view class="content">
		<view class="page-body">
			<view class="page-section">
				<view class="page-body-info">
					<view class="page-body-title">用户信息</view>
					<image class="userinfo-avatar" :src="userInfo.avatar"></image>
					<text class="userinfo-nickname">{{userInfo.name}}</text>
				</view>
				
			</view>
		</view>
        <view class="btn-row">
            <button v-if="!userInfo" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-else type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
	import service from '../../service.js';
	
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
		data:{
			userInfo:{}
		},
		onLoad() {
			var userInfo = service.getLoginUser();
			if (userInfo) {
				this.$data.userInfo = userInfo;	
			}else{
				uni.navigateTo({
					url: '../login/login',
				});
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                service.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                uni.reLaunch({
                	url: '../login/login',
                });
            }
        }
    }
</script>

<style>
.page-body-info {
		padding-bottom: 0;
		height: 460upx;
	}

	.userinfo-avatar {
		border-radius: 128upx;
		width: 128upx;
		height: 128upx;
	}

	.userinfo-nickname {
		margin-top: 20upx;
		font-size: 38upx;
	}
</style>
