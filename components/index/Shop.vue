<!-- 店铺 -->
<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-img">
				<image class="shop-img" src="@/static/image/shop-index.png"></image>
			</view>
			<scroll-view class="scroll-content" scroll-x="true">
				<view class="scroll-item">
					<Commodity :dataList="shopList" itemW="200rpx" itemH="130rpx" wrap="no-wrap"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		data() {
			return {
				shopList: [
					{
						'id' : 1,
						'pic' : '../../static/image/shop-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 2,
						'pic' : '../../static/image/shop-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 3,
						'pic' : '../../static/image/shop-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 4,
						'pic' : '../../static/image/shop-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 4,
						'pic' : '../../static/image/shop-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
				]
			}
		},
		components : {
			Commodity
		}
	}
</script>

<style scoped>
	.shop-item {
		
	}
	.shop-img {
		width: 100%;
		height: 350rpx;
		margin-bottom: 2rpx
	}
	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
		width: 300rpx;
		height: 300rpx;
		margin-bottom: 20rpx;
	}
</style>