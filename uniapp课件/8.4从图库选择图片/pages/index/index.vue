<template>
	<view class="mycontent">
		<img :src="img"></img>
		<button @click="chooseimg" type="default">选择图片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:''
			}
		},
		onLoad() {

		},
		methods: {
			chooseimg(){
				/* 
				注意:这里success要写成箭头函数形式,
				否则this不是指向组件实例,this.img显示不出来
				 */
				uni.chooseImage({
					count:1,
					success:(res)=>{
						this.img = res.tempFilePaths[0];
						console.log(this.img);
					}
				})
			}

		}
	}
</script>

<style>
	
</style>
