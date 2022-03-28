<template>
	<view class="content">
		<image
		class="img"
		@click="foo(index)"
		:src="item" v-for="(item,index) in list" :key='index'></image>
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
		onLoad() {

		},
		methods: {
         foo(index){
			 uni.previewImage({
			 	urls:this.list,
				current:index
			 })
		 }
		}
	}
</script>

<style>
	.img{
		height: 40px;
		width: 40px;
	}
</style>
