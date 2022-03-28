<template>
	<view class="myinput">
		<input type="text" v-model="msg" placeholder="请输入内容"/>
		<button @click="foo" type="default">发送</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
			}
		},
		methods:{
			foo(){
				uni.$emit('send',this.msg)
			}
		}
	}
</script>

<style scoped>
	.myinput{
		margin: 10px;
		padding: 20px;
		border:1px solid #007AFF;
		input{
			height: 30px;
			border: 1px solid #007AFF;
		}
	}
	
</style>
