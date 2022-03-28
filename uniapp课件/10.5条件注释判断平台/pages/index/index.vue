<template>
	<view class="content">
		<!-- 不能在微信平台显示下面组件,其他平台都可以 -->
		<!-- #ifndef MP-WEIXIN -->
		  <hello></hello>
		<!-- #endif -->
		
		<!-- 只能在微信平台显示下面组件 -->
		<!-- #ifdef MP-WEIXIN -->
		  <hello></hello>
		<!-- #endif -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
