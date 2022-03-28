<template>
	<view class="mylabel">
		获取到myinput传递的数据:{{m}}
	</view>
</template>

<script>
	export default{
		data(){
			return{
				m:''
			}
		},
		
		mounted(){
			uni.$on('send',(data)=>{
				this.m = data;
			})
		}
	}
</script>

<style scoped>
	.mylabel{
		border: 1px solid #007AFF;
	}
</style>
