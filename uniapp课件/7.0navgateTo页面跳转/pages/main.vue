<template>
	<view class="main">
		<button @click="godetail" type="default">去详情页</button>
	</view>
</template>

<script>
	export default{
		methods:{
			godetail(){
				/* 注意:需要路径前面加个 / 否则可能跳转失败 */
				uni.navigateTo({
					url:'/pages/detail'
				})
			}
		},
		onHide(){
			console.log('onHide');
		}
		
	}
</script>

<style>
</style>
