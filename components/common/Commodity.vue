<!-- 单个商品通用组件 -->
<template>
	<view class="commodity" :style="'flex-wrap: '+wrap+''">
		<view class="commodity-item" v-for="(item,index) in dataList" :key="index" :style="'width:'+itemW+''"
		@click="details()">
			<image class="commodity-img" :src="item.pic" :style="'height:'+itemH+''"></image>
			<view class="commodity-content">
				<text class="commodity-desc">{{item.desc}}</text>
				<view>
					<text class="commodity-oprice">￥{{item.oprice}}</text>
					<text class="commodity-nprice">￥{{item.nprice}}</text>
					<text class="commodity-discount">{{item.discount}}折</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			dataList : Array,
			itemW: {
				type: String,
				default : '375rpx'
			},
			itemH: {
				type: String,
				default : '375rpx'
			},
			//是否换行
			wrap: {
				type: String,
				default: 'wrap'
			}
		},
		methods: {
			details() {
				uni.navigateTo({
					url:'/pages/details/details'
				})
			}
		}
	}
</script>

<style scoped>
	.commodity {
		display: flex;
	}
	.commodity-item {
		padding-bottom: 20rpx;
	}
	.commodity-img {
		width: 100%;
	}
	.commodity-content {
		text-align: center;
	}
	.commodity-desc {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333333;
		word-break: break-all;
		font-size: 28rpx;
	}
	.commodity-oprice {
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999999;
	}
	.commodity-nprice {
		font-size: 30rpx;
		color: #000000;
	}
	.commodity-discount {
		border: 1rpx solid #f60505;
		border-radius: 2rpx;
		padding: 2rpx 10rpx;
		font-size: 18rpx;
		color: #f60505;
	}
</style>