<template>
	<view class="login">
		<button @click="gotabbar" type="default">去tabbar页面</button>
	</view>
</template>

<script>
	export default{
		methods:{
			gotabbar(){
				uni.switchTab({
					url:'/pages/my'
				});
			}
		}
	}
</script>

<style>
</style>
