<!-- 商品列表组件 -->
<template>
	<view class="commodity-list">
		<Commodity :dataList="commodityList"></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		data() {
			return {
				commodityList: [
					{
						'id' : 1,
						'pic' : '../../static/image/commodity-1.png',
						'desc': '你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 2,
						'pic' : '../../static/image/commodity-2.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 3,
						'pic' : '../../static/image/commodity-3.png',
						'desc': '你好uniapp',
						'oprice': '999',
						'nprice': '666',
						'discount' : 6.6
					},
					{
						'id' : 4,
						'pic' : '../../static/image/commodity-4.png',
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

<style>
</style>