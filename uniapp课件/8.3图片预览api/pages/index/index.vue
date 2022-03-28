<template>
	<view class="content">
		<image 
		@click="previewimg(index)" 
		v-for="(item,index) in list" 
		:src="item">
		</image>
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
		
		methods:{
			previewimg(index){
				uni.previewImage({
					urls:this.list,
					current:index,
					indicator:"default"//app和小程序中才有效
				})
			}
		}
	}
</script>

<style>
	image{
		height: 80rpx;
		width: 80rpx;
	}
</style>
