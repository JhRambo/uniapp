<!-- 首页轮播组件 -->
<template>
	<view>
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000"
			:circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-image" src="@/static/image/swiper-1.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-image" src="@/static/image/swiper-2.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-image" src="@/static/image/swiper-3.png"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
</script>

<style scoped>
	.swiper-image {
		width: 100%;
		height: 400rpx;
	}
</style>
