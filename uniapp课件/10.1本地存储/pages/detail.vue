<template>
	<view>
		<view class="">
			姓名:{{name}}
		</view>
		<view class="">
			年龄:{{age}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				age:0
			}
		},
		methods: {
			
		},
		/* 
		页面生命周期钩子函数onLoad功能和mounted类似,
		也就是说你之前放在mounted里面的一些操作,在uniapp的
		页面中就可以放在onLoad这个函数中,比如说数据请求,获取
		本地存储数据等.
		 */
		onLoad(){
			let user = uni.getStorageSync('user');
			if(user){
				this.name = user.name;
				this.age = user.age;
			}
		}
	}
</script>

<style>

</style>
