<template>
	<view class="content">
		<button @click="sendpostReq" type="default">发送post请求</button>
		<button @click="sendgetReq" type="default">发送get请求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods:{
			sendpostReq(){
				this.$http.post('http://127.0.0.1:3000/name',
				{name:'刘备'},
				data=>{
					uni.showModal({
						title:`请求数据:${data.name}`
					})
				});
				
			},
			
			sendgetReq(){
				this.$http.get('http://127.0.0.1:3000/age',
				{age:18},
				data=>{
					uni.showModal({
						title:`请求数据:${data.age}`
					})
				});
				
			}
		}
	}
</script>

<style>
	
</style>
