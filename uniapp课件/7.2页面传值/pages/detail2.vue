<template>
	<view class="detail">
		获取到了main页面传来的参数:{{op.name}}:{{op.age}}
	</view>
</template>

<script>
	export default{
		data(){
			return{
				op:''
			}
		},
		/* 
		onLoad页面生命周期函数,页面加载的时候触发
		options为上个页面传递过来的参数
		*/
		onLoad(options) {
			//将获取到的json字符串转为json对象
			this.op =JSON.parse(decodeURIComponent(options.obj));
		}
	}
</script>

<style>
</style>
