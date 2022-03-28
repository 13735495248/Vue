<template>
	<view class="main">
		姓名:
		<input 
		class="input" 
		type="text" 
		placeholder="请输入姓名" 
		v-model="name"/>
		年龄:
		<input 
		class="input" 
		type="text" 
		placeholder="请输入年龄" 
		v-model="age"/>
		<button @click="godetail1" type="default">传基本数据去详情页1</button>
		<button @click="godetail2" type="default">传对象去详情页2</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				age:''
			}
		},
		
		methods:{
			godetail1(){
				uni.navigateTo({
					url:`/pages/detail1?name=${this.name}&age=${this.age}`
				})
			},
			godetail2(){
				let obj = {name:this.name,age:this.age};
				uni.navigateTo({
					url:`/pages/detail2?obj=${encodeURIComponent(JSON.stringify(obj))}`
				})
			}
		}
	}
</script>

<style>
	.input{
		height: 40px;
		border: 1px solid #007AFF;
	}
</style>
