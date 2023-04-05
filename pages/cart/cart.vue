<template>
	<view class="cart">
		<!-- 自定义导航栏 -->
		<UniNavBar title="购物车" :rightText="!isNavBar? '编辑' : '完成'" fixed="true" shadow="true" statusBar="true" @clickRight="isNavBar = !isNavBar"></UniNavBar>
		<view class="cart-item" v-for="index in 10" :key="index">
			<label class="cart-radio">
				<radio></radio>
			</label>
			<image class="cart-img" src="../../static/image/commodity-1.png"></image>
			<view class="cart-content" @tap="toDetails">
				<view class="cart-name">你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp</view>
				<view class="cart-attribute">品种：亚洲</view>
				<view class="cart-count">
					<view class="cart-price">￥888</view>
					<view class="cart-num">*1</view>
				</view>
			</view>
		</view>
		<view class="cart-foot">
			<view class="cart-foot-left">
				<label class="cart-radio">
					<radio>全选</radio>
				</label>
			</view>
			<view class="cart-foot-right">
				<view class="cart-foot-price">合计：￥0</view>
				<view class="cart-foot-buy">结算(0)</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				isNavBar: false
			}
		},
		methods: {
			toDetails() {
				uni.navigateTo({
					url:'/pages/details/details'
				})
			},
		},
		components: {
			UniNavBar
		}
	}
</script>

<style scoped>
.cart {
	margin-bottom: 100rpx;
}
.cart-item{
	padding: 20rpx 0;
	border-bottom: 2rpx solid #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: center;
}
.cart-radio {
	font-size: 26rpx;
	padding-left: 10rpx;
}
.cart-content {
	flex: 1;
	padding: 0 10rpx;
}
.cart-img {
	width: 200rpx;
	height: 200rpx;
}
.cart-name {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	font-size: 28rpx;
	margin-bottom: 5rpx;
}
.cart-attribute {
	color: #636263;
	font-size: 24rpx;
	margin-bottom: 5rpx;
}
.cart-count {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cart-price {
	color: #636263;
	font-size: 26rpx;
}
.cart-num {
	color: #636263;
	font-size: 26rpx;
}
.cart-foot {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ffffff;
	border-top: 2rpx solid #f7f7f7;
}
.cart-foot-right {
	display: flex;
	align-items: center;
	justify-content: center;
}
.cart-foot-price {
	padding-right: 30rpx;
}
.cart-foot-buy {
	width: 160rpx;
	background-color: #42B7FB;
	color: #ffffff;
	padding: 20rpx 0;
	text-align: center;
}
</style>
