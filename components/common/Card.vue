<!-- 卡片通用组件 -->
<template>
	<view class="card">
		<view>-</view>
		<view class="card-name">{{cardTitle}}</view>
		<view>-</view>
	</view>
</template>

<script>
	export default{
		props : {
			cardTitle : String
		}
	}
</script>

<style scoped>
	.card {
		padding: 20rpx 0;
		/* 不换行 */
		display: flex;
		/* 居中显示 */
		justify-content: center;
		font-weight: bold;
	}
	.card-name {
		padding: 0 20rpx;
		font-size: 32rpx;
	}
</style>