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
				
				uni.setStorage({
				    key: 'user',
				    data: user,
				    success: function () {
				        console.log('success');
						uni.navigateTo({
							url:'/pages/detail'
						})
				    }
				});
				
			}
		}
	}
</script>

<style>

</style>
