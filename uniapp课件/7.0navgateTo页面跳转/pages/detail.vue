<template>
	<view class="detail">
		<button @click="gomain" type="default">回首页</button>
	</view>
</template>

<script>
	export default{
		methods:{
			gomain(){
				/* 
				delta:返回的页面数，如果 delta 大于现有页面数，则返回到首页
				*/
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style>
</style>
