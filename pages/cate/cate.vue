<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav f-color">
			<view></view>
			<input type="text" name="" class="search-text" id="" disabled="true" placeholder="请输入搜索内容" @click="search">
		</view>
		<!-- #endif -->
		<Lines></Lines>
		<view class="cate">
				<scroll-view class="cate-left" scroll-y="true" :scroll-into-view="scrollIntoIndex">
					<view class="left-item" v-for="(item,index) in leftData" :key="index" :id="'top'+index">
						<view class="left-name" :class="leftIndex == index ? 'left-name-active' : ''" @click="changeTab(index)">{{item.name}}</view>
					</view>
				</scroll-view>
				<scroll-view class="cate-right" scroll-y="true">
					<CommodityList></CommodityList>
				</scroll-view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	export default {
		data() {
			return {
				leftIndex: 0,
				scrollIntoIndex: 'top0',
				leftData : [
					{
						'name': '推荐',
					},
					{
						'name': '限时折扣',
					},
					{
						'name': '时令鲜果',
					},
					{
						'name': '宝藏单品',
					},
					{
						'name': '海鲜水产',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
					{
						'name': '火锅到家',
					},
				]	
			}
		},
		components: {
			Lines,
			CommodityList
		},
		onNavigationBarSearchInputClicked() {
			// #ifdef H5
				uni.navigateTo({
					url:'../search/search'
				})
			// #endif
		},
		methods: {
			changeTab(index) {
				if (this.leftIndex == index) {
					return;
				}
				this.leftIndex = index
				this.scrollIntoIndex = 'top'+index
			},
			search() {
				uni.navigateTo({
					url:'../search/search'
				})
			}
		}
	}
</script>

<style scoped>
	.cate {
		display: flex;
	}
	.cate-left {
		width: 200rpx;
	}
	.cate-right {
		flex: 1;
	}
	.left-item {
		height: 100rpx;
		border-bottom: 2rpx solid #fff;
		font-size: 28rpx;
		background-color: #f7f7f7;
	}
	.left-name {
		padding: 30rpx 6rpx;
		text-align: center;
	}
	.left-name-active {
		border-left: 8rpx solid #49BDFB;
		background-color: #fff;
	}
	.wx-nav {
		width: 100%;
		height: 200rpx;
		line-height: 200rpx;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	.search-text {
		border-radius: 10rpx;
		border: 2rpx solid #efefef;
		width: 68%;
		margin-left: 10rpx;
		font-size:32rpx;
	}
</style>
