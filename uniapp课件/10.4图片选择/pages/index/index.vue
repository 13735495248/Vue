<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<image @click="foo" class="img" :src="img"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:'/static/icon.png'
			}
		},
		onLoad() {

		},
		methods: {
          foo(){
			  uni.chooseImage({
			  	count:1,
				success:(res)=>{
					this.img = res.tempFilePaths[0];
					console.log('res:',res);
				}
			  })
		  }
		}
	}
</script>

<style>
	.img{
		width: 400rpx;
		height: 400rpx;
	}
</style>
