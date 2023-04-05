<template>
	<view class="details">
		<IndexSwiper></IndexSwiper>
		<view class="details-item">
			<view class="goods-nprice">现价：￥666</view>
			<view class="goods-oprice">原价：￥999</view>
			<view class="goods-detail">你好uniapp</view>
		</view>
		<Card cardTitle="看了又看"></Card>
		<CommodityList></CommodityList>
		<!-- 底部 -->
		<view class="details-foot">
			<view class="iconfont icon-xiaoxi"></view>
			<view class="iconfont icon-gouwuche" @tap="toCart()"></view>
			<view class="add-cart" @tap="showPop()">加入购物车</view>
			<view class="buy" @tap="showPop()">立即购买</view>
		</view>
		<!-- 底部弹窗 -->
		<view class="pop" v-show="isShow" @touchmove.stop.prevent="">
			<view class="pop-mark" @tap="hidePop()"></view>
			<view class="pop-box" :animation="animationData">
				<view>
					<image class="pop-image" src="@/static/image/swiper-3.png"></image>
				</view>
				<view class="pop-num">
					<view>购买数量</view>
					<UniNumberBox></UniNumberBox>
				</view>
				<view class="pop-sure" @tap="sure()">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniNumberBox from '@/components/uni/uni-number-box/uni-number-box.vue'
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	export default {
		data() {
			return {
				isShow: 0,
				animationData: {}
			}
		},
		methods: {
			toCart() {
				uni.switchTab({
					url:'/pages/cart/cart'
				})
			},
			showPop() {
				var animation = uni.createAnimation({
					duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export()
				this.isShow = 1;
				setTimeout(() => {
					animation.translateY(0).step()
					this.animationData = animation.export()
				}, 200)
			},
			hidePop() {
				var animation = uni.createAnimation({
					duration: 200
				})
				animation.translateY(600).step();
				this.animationData = animation.export()
				this.isShow = 1;
				setTimeout(() => {
					animation.translateY(0).step()
					this.isShow = 0;
				}, 200)
			},
			sure() {
				this.hidePop();
			}
		},
		components: {
			IndexSwiper,
			Card,
			CommodityList,
			UniNumberBox
		},
		onNavigationBarButtonTap(e) {
			console.log(e.type)
			if (e.type === 'share') {
				// TODO
				var jWeixin = require('jweixin-module');
				jWeixin.ready(function() {
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						imageUrl: "../../static/image/commodity-1.png",
						title: '买了呀',
						href: "http://localhost:8080/#/pages/details/details",
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					})
				})
			}
		}
	}
</script>

<style>
	.details {
		height: 2000rpx;
	}

	,
	.details-item {
		text-align: center;
		color: #636263;
	}

	.goods-nprice {
		font-size: 36rpx;
	}

	.goods-oprice {
		font-size: 32rpx;
		text-decoration: line-through;
	}

	.goods-detail {
		font-size: 32rpx;
	}

	.details-foot {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
	}

	.details-foot .iconfont {
		background-color: #000;
		height: 80rpx;
		height: 38rpx;
		border-radius: 100%;
		color: #fff;
		text-align: center;
		margin: 0 10rpx;
		font-size: 40rpx;
	}

	.add-cart {
		margin: 0 40rpx;
		padding: 6rpx 30rpx;
		border-radius: 40rpx;
		background-color: #000;
		color: #fff;
		border-radius: 40rpx;
	}

	.buy {
		padding: 6rpx 30rpx;
		border-radius: 40rpx;
		color: #fff;
		background-color: #42B7FB;
		border-radius: 40rpx;
	}

	.pop {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 9999;
	}

	.pop-mark {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.pop-box {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 200px;
		width: 100%;
		background-color: #fff;
	}

	.pop-image {
		width: 200rpx;
		height: 200rpx;
	}

	.pop-sure {
		text-align: center;
		line-height: 80rpx;
		background-color: #42B7FB;
		color: #fff;
	}

	.pop-num {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}
</style>
