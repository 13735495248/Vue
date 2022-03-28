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
				uni.request({
					url:'http://127.0.0.1:3000/name',
					data:{
						name:'刘备'
					},
					method:'POST',
					success: (res)=>{
						console.log(res);
						uni.showModal({
							title:`请求数据:${res.data.name}`
						})
					}
				})
			},
			
			sendgetReq(){
				uni.request({
					url:'http://127.0.0.1:3000/age',
					data:{
						age:18
					},
					method:'GET',
					success: (res)=>{
						console.log(res);
						uni.showModal({
							title:`请求数据:${res.data.age}`
						})
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
