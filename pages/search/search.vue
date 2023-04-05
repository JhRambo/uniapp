<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav f-color">
			<view class="iconfont icon-zuojiantou icons" @click="backStep"></view>
			<input type="text" name="" class="search-text" id="" placeholder="请输入搜索内容">
			<view class="iconfont icon-Magnifier icons" @click="search"></view>
		</view>
		<!-- #endif -->
		<Lines></Lines>
		<view class="search">
			<view class="search-item">
				<view class="search-title">
					<view class="f-color">最近搜索</view>
					<view class="iconfont icon-lajitong"></view>
				</view>
				<view>
					<view class="search-name f-color">野猪</view>
					<view class="search-name f-color">狗熊</view>
				</view>
			</view>
			<view class="search-item">
				<view class="search-title">
					<view class="f-color">热门搜索</view>
				</view>
				<view>
					<view class="search-name f-color">野猪</view>
					<view class="search-name f-color">狗熊</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Lines
		},
		methods: {
			search() {
				uni.navigateTo({
					url:'../search-list/search-list'
				})
			},
			backStep() {
				uni.navigateBack({
					delta:1,//返回层数，2则上上页
				})
			}
		},
		onNavigationBarButtonTap(e) {
			// #ifdef H5
				if (e.index == 0) {
					uni.navigateTo({
						url:'../search-list/search-list'
					})
				}
			// #endif
		}
	}
</script>

<style scoped>
	.search-item {
		padding: 10rpx;
	}
	.search-title {
		display: flex;
		justify-content: space-between;
	}
	.search-name {
		padding: 4rpx 24rpx;
		background-color: #e1e1e1;
		display: inline-block;
		border-radius: 26rpx;
		margin: 10rpx;
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
		width: 57%;
		margin-left: 10rpx;
		font-size:32rpx;
	}
	.icons {
		font-size: 50rpx;
	}
</style>
