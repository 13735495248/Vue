<template>
	<view class="content">
		<view>
			数字a:{{a}}
		</view>
		<view>
			数字b:{{b}}
		</view>
		<view>a,b的和{{sum}}</view>
		<button @click="add" type="default">
			a增加1
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:1,
				b:1
			}
		},
		methods: {
           add(){
			   this.a++;
		   }
		},
		computed:{
			sum(){
				return this.a+this.b;
			}
		},
		watch:{
			a(newval,oldval){
				console.log('监听到a变化了:',newval,oldval);
			}
		}
	}
</script>

<style>
	
</style>
