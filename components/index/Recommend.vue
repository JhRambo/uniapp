<!-- 首页推荐组件 -->
<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<image class="item-big" :src="item.big_pic"></image>
			<view class="item-small">
				<image class="small-img" v-for="(item2,index2) in item.small_pic" :key="index2" :src="item2"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			dataList: Array
		}
	}
</script>

<style scoped>
	.recommend {
		padding: 20rpx;
	}
	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big {
		width: 100%;
		height: 300rpx;
		margin-bottom: 2rpx;
	}
	.item-small {
		width: 100%;
		height: 200rpx;
	}
	.small-img {
		height: 200rpx;
		width: 33.33%;
	}
</style>