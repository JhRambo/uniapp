<template>
	<view class="index">
		<!-- 自定义首页头部 -->
		<!-- #ifdef MP-WEIXIN -->
			<view class="wx-nav">
				<view class="iconfont icon-Magnifier icons" @click="indexBar(1)"></view>
				<text>买了呀</text>
				<view class="iconfont icon-xiaoxi icons" @click="indexBar(2)"></view>
			</view>
		<!-- #endif -->
		
		<scroll-view class="scroll-content" scroll-x="true" :scroll-into-view="scrollIntoIndex">
			<view class="scroll-item" v-for="(item,index) in tabBar" :key="index" :id="'top'+index">
				<text :class="tabBarIndex == index ? 'f-active-color' : 'f-color'" @click="changeTab(index)">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<view class="home-data" :style="'height:'+tabContentHeight+'px'">
			<IndexSwiper></IndexSwiper>
			<Card cardTitle="今日热点"></Card>
			<RecommendList></RecommendList>
			<Card cardTitle="猜你喜欢"></Card>
			<CommodityList></CommodityList>
			<Card cardTitle="运动户外"></Card>
			<Banner></Banner>
			<Icons></Icons>
			<Card cardTitle="热款爆品"></Card>
			<Hot></Hot>
			<Card cardTitle="推荐店铺"></Card>
			<Shop></Shop>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import RecommendList from '@/components/index/RecommendList.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
	export default {
		data() {
			return {
				tabContentHeight: 0,
				//顶部导航跟随滑动索引
				scrollIntoIndex: 'top0',
				tabBarIndex: 0,
				tabBar : [
					{'name' : '推荐'},
					{'name' : '今日热点'},
					{'name' : '推荐店铺'},
					{'name' : '运动户外'},
					{'name' : '猜你喜欢'},
					{'name' : '热款爆品'},
					{'name' : '买了到家'},
				]
			}
		},
		onLoad() {
			//接口函数
			$http.request({
				url:'/get_goods',
			}).then((res)=>{
				console.log(res)
			});
		},
		onReady() {
			// 计算高度
			let view = uni.createSelectorQuery().in(this).select(".home-data");
			view.boundingClientRect(data => {
				this.tabContentHeight = data.height
			}).exec();
		},
		components: {
			IndexSwiper,
			RecommendList,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop,
		},
		methods: {
			indexBar(index) {
				if (index == 1) {
					uni.navigateTo({
						url:'../search/search'
					})
				}
			},
			changeTab(index) {
				if (this.tabBarIndex == index) {
					return;
				}
				this.tabBarIndex = index
				this.scrollIntoIndex = 'top'+index
			}
		},
		onNavigationBarButtonTap(e) {
			// #ifdef H5
				if (e.index == 0) {
					uni.navigateTo({
						url:'../search/search'
					})
				}
			// #endif
		}
	}
</script>

<style>
	.wx-nav {
		text-align: center;
		width: 100%;
		height: 200rpx;
		line-height: 200rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		color: #636263;
	}
	.icons {
		font-size: 50rpx;
		padding: 10rpx;
	}
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
		padding: 10rpx 20rpx;
	}
	.f-active-color {
		text-decoration: underline;
	}
</style>
