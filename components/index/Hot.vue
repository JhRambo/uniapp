<!-- 热款爆品组件 -->
<template>
	<view class="hot">
		<Commodity :dataList="hotList" itemW="250rpx" itemH="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		data() {
			return {
				hotList: [
					{
						'id' : 1,
						'pic' : '../../static/image/hot-1.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 2,
						'pic' : '../../static/image/hot-2.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 3,
						'pic' : '../../static/image/hot-3.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					}
				]
			}
		},
		components: {
			Commodity
		}
	}
</script>

<style>
</style>