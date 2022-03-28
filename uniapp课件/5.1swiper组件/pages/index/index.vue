<template>
	<view class="content">
		<!-- 
		swiper实现banner图
		indicator-dots:是否显示指示点
		autoplay:是否自动滑动
		interval:自动切换时间间隔
		duration:滑动动画时长
		indicator-active-color:当前选中的指示点颜色
		indicator-color:未选中的指示点颜色
		-->
		<swiper 
		class="swiper"
		indicator-color="rgba(0,0,255,1)"
		indicator-active-color="rgba(255,1,1,1)"
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000">
			<swiper-item v-for="item in list">
				<image :src="item" style="width: 100%;"></image>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					`https://t7.baidu.com/it/u=576001735,3321902997&fm=193&f=GIF`,
					`https://t7.baidu.com/it/u=508006830,4042443322&fm=193&f=GIF`,
					`https://t7.baidu.com/it/u=4199585952,2297435588&fm=193&f=GIF`,
				]
			}
		},
	}
</script>

<style>
	.swiper{
		height: 200px;
	}
</style>
