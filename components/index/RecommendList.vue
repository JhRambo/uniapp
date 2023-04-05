<!-- 首页推荐组件列表 -->
<template>
	<view class="recommend-list">
		<Recommend :dataList="recommendList"></Recommend>
	</view>
</template>

<script>
	import Recommend from '@/components/index/Recommend.vue'
	export default {
		data() {
			return {
				recommendList: [
					{
						'big_pic' : '../../static/image/index-big.png',
						'small_pic' : [
							'../../static/image/index-small-1.png',
							'../../static/image/index-small-2.png',
							'../../static/image/index-small-3.png',
						]
					},
					{
						'big_pic' : '../../static/image/index-big.png',
						'small_pic' : [
							'../../static/image/index-small-1.png',
							'../../static/image/index-small-2.png',
							'../../static/image/index-small-3.png',
						]
					}
				]
			}
		},
		components: {
			Recommend
		}
	}
</script>

<style>
</style>