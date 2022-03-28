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
				name:'5555',
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
			uni.getStorage({
			    key: 'user',
			    success: (res)=>{
				    //this-->外层函数体中的this
					this.name = res.data.name;
					this.age = res.data.age;
			        
			    }
			});
		}
	}
</script>

<style>

</style>
