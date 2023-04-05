<template>
	<view class="mine">
		<view class="mine-header">
			<view class="mine-info">
				<image class="mine-img" src="../../static/image/commodity-1.png"></image>
				<view>uniapp</view>
			</view>
			<image class="mine-setting" src="../../static/image/setting.png" @tap="setting()"></image>
		</view>
		<view class="mine-order">
			<view class="order-header">
				<view class="mine-order-left">我的订单</view>
				<view class="mine-order-right">全部订单></view>
			</view>
			<view class="order-content">
				<view class="order-title">
					<image class="order-img" src="../../static/image/daizhifu.png"></image>
					<view class="order-name">待支付</view>
				</view>
				<view class="order-title">
					<image class="order-img" src="../../static/image/daifahuo.png"></image>
					<view class="order-name">待发货</view>
				</view>
				<view class="order-title">
					<image class="order-img" src="../../static/image/daishouhuo.png"></image>
					<view class="order-name">待收货</view>
				</view>
				<view class="order-title">
					<image class="order-img" src="../../static/image/daipingjia.png"></image>
					<view class="order-name">待评价</view>
				</view>
				<view class="order-title">
					<image class="order-img" src="../../static/image/shouhou.png"></image>
					<view class="order-name">售后管理</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			setting() {
				uni.showToast({
					title:'点我设置'
				})
			}
		}
	}
</script>

<style scoped>
	.mine-header {
		background: url('../../static/image/mine-background.png') no-repeat;
		background-size: 100%;
		height: 350rpx;
	}
	.mine-info {
		position: absolute;
		width: 120rpx;
		height: 120rpx;
		left: 50%;
		margin-left: -60rpx;
		padding-top: 60rpx;
		text-align: center;
	}
	.mine-img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
	}
	.mine-setting {
		position: absolute;
		right: 10rpx;
		top: 10rpx;
		height: 50rpx;
		width: 50rpx;
	}
	.mine-order {
		height: 180rpx;
		width: 100%;
		margin-bottom: 5rpx;
		border-bottom: 4rpx solid #cccccc;
		font-size: 28rpx;
		color: #636263;
	}
	.mine-order-left {
		padding-left: 15rpx;
	}
	.mine-order-right {
		padding-right: 15rpx;
	}
	.order-header {
		display: flex;
		justify-content: space-between;
	}
	.order-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.order-img {
		width: 80rpx;
		height: 80rpx;
	}
	.order-name {
		font-size: 24rpx;
	}
	.order-title {
		width: 20%;
		padding-left: 15rpx;
		text-align: center;
	}
</style>
