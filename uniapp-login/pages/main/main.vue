<template>
	<view class="index">
		<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
			<block v-for="(tab,index) in tabs" :key="tab.id">
				<view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @tap="swichNav">{{tab.name}}</view>
			</block>
		</scroll-view>
		<view class="page">
			<view class="uni-card">
				<view class="uni-list">
					
					<view v-for="(newsitem, newsIndex) in newsitems" :key="newsIndex" class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							{{newsitem.news_title}}
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>



<script>
	import service from '../../service.js';
	import uniBadge from "../../components/uni-badge.vue";
	
	export default {
			data() {
				return {
					title: 'tabbar',
					scrollLeft: 0,
					isClickChange: false,
					currentTab: 0,
					tabs: [{
						name: '新闻',
						id: 'news'
					}, {
						name: '日程',
						id: 'richeng'
					}],
					newsitems: []
				}
			},
			
			onLoad: function () {
				var userInfo = service.getLoginUser();
				var g = this;
				if (userInfo) {
					this.userInfo = userInfo;
					service.getNewsList().then(function(data){
						console.log(data);
						g.newsitems = data;
					}).catch(function(res){
						
					})
				} else {
					uni.showModal({
						title: '未登录',
						content: '您未登录，需要登录后才能继续',
						success: (res) => {
							if (res.confirm) {
								uni.reLaunch({
									url: '../login/login'
								});
							}
						}
					});
				}
			},
			onUnload:function(){
				this.scrollLeft = 0,
					this.isClickChange = false,
					this.currentTab = 0;
			},
			methods: {
				bindChange: async function (e) {
					let index = e.target.current;
					if (this.isClickChange) {
						this.currentTab = index;
						this.isClickChange = false;
						return;
					}
					let tabBar = await this.getWidth("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft;
	
					let width = 0;
	
					for (let i = 0; i < index; i++) {
						let result = await this.getWidth(this.tabs[i].id);
						width += result.width;
					}
	
					let winWidth = uni.getSystemInfoSync().windowWidth,
						nowElement = await this.getWidth(this.tabs[index].id),
						nowWidth = nowElement.width;
	
					if (width + nowWidth - tabBarScrollLeft > winWidth) {
						this.scrollLeft = width + nowWidth - winWidth;
					}
					if (width < tabBarScrollLeft) {
						this.scrollLeft = width;
					}
					this.isClickChange = false;
					this.currentTab = index; //一旦访问data就会出问题
				},
				getWidth: function (id) { //得到元素的宽高
					return new Promise((res, rej) => {
						uni.createSelectorQuery().select("#" + id).fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							if (id === 'tab-bar') {
								console.log("id=", id, "数据:", data)
							}
							res(data);
						}).exec();
					})
				},
				swichNav: async function (e) { //点击tab-bar
					if (this.currentTab === e.target.dataset.current) {
						return false;
					} else {
						let tabBar = await this.getWidth("tab-bar"),
							tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
						this.scrollLeft = tabBarScrollLeft;
						this.isClickChange = true;
						this.currentTab = e.target.dataset.current
					}
				},
				loadMore: function (e) {
					let last = this.newsitems[e][this.newsitems[e].length - 1].label,
						name = this.newsitems[e][this.newsitems[e].length - 1].name;
					for (let i = 1; i <= 10; i++) {
						this.newsitems[e].push({
							name: name,
							label: i + last
						});
					}
				},
				randomfn() {
					let ary = [];
					for (let i = 0, length = this.tabs.length; i < length; i++) {
						let aryItem = [];
						for (let j = 1; j <= 20; j++) {
							aryItem.push({
								name: this.tabs[i].name,
								label: j
							});
						}
						ary.push(aryItem);
					}
					return ary;
				}
			}
		}
	
</script>

<style>
    page {
    		display: flex;
    	}
    
    	.index {
    		display: flex;
    		flex: 1;
    		flex-direction: column;
    		overflow: hidden;
    		height: 100%;
    	}
    
    	.index-bd {
    		width: 750upx;
    		height: 100%;
    	}
    
    	.swiper-tab {
    		width: 100%;
    		white-space: nowrap;
    		line-height: 64upx;
    		height: 64upx;
    	}
    
    
    	.swiper-tab-list {
    		font-size: 30upx;
    		width: 50%;
    		display: inline-block;
    		text-align: center;
    		color: #777777;
    	}
    
    	.on {
    		color: #FF0000;
    		border-bottom: 5upx solid #FF0000;
    	}
    
    	.swiper-box {
    		flex: 1;
    		width: 100%;
    		height: 100%;
    	}
    
    	.swiper-box view {
    		text-align: center;
    	}
    
    	.tab-list {
    		width: 100%;
    		height: 90upx;
    		line-height: 90upx;
    		text-align: left;
    		border-bottom: 2upx solid #EFEFF4;
    	}
</style>
