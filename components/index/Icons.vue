<template>
	<view class="icons">
		<view class="icons-item">
			<image class="icons-img" src="@/static/image/sports-banner-icons-1.png"></image>
			<text class="icons-name f-color">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="@/static/image/sports-banner-icons-1.png"></image>
			<text class="icons-name f-color">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="@/static/image/sports-banner-icons-1.png"></image>
			<text class="icons-name f-color">运动户外</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="@/static/image/sports-banner-icons-1.png"></image>
			<text class="icons-name f-color">运动户外</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.icons {
		display: flex;
		flex-wrap: wrap;
	}
	.icons-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;
	}
	.icons-img {
		height: 100rpx;
		width: 100rpx;
		border-radius: 10rpx;
	}
	.icons-name {
		font-size: 30rpx;
	}
</style>