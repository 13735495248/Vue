<template>
	<view class="content">
		<button @click="savedata" type="default">数据存到本地</button>
		<button @click="getdata" type="default">从本地取数据</button>
		<button @click="deletedata" type="default">删除本地数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			//存数据
			savedata(){
				uni.setStorageSync('user',{name:'刘备',age:18});
				uni.showToast({
					title:'数据存储成功',
					duration:1000
				})
			},
			//取数据
			getdata(){
				let obj = uni.getStorageSync('user');
				if(obj){
					uni.showToast({
						title:`获取数据成功:${JSON.stringify(obj)}`,
						duration:1000
					})
				}else{
					uni.showToast({
						title:`获取数据失败`,
						icon:'error',
						duration:1000
					})
				}
				
			},
			//删数据
			deletedata(){
				uni.removeStorageSync('user');
				uni.showToast({
					title:'删除数据成功',
					duration:1000
				})
			}

		}
	}
</script>

<style>
	
</style>
