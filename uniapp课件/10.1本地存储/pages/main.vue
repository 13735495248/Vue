<template>
	<view>
		<button @click="godetail" type="default">去详情页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			godetail(){
				let user = {
					name:'刘备',
					age:18
				}
				/* 
				同步存储数据到本地的方法:setStorageSync
				有两个参数:
				  第一个:key
				  第二个是要存的数据,可以是基本数据类型和引用数据类型(对象,数组)
				 */
				uni.setStorageSync('user',user);
				uni.navigateTo({
					url:'/pages/detail'
				})
			}
		}
	}
</script>

<style>

</style>
