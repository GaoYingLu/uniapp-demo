<template>
    <view class="content">
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

</style>
