<template>
	<view class="son">
		<view>
			子组件获取到了父组件的数据:{{msg}}
		</view>
		<button @click="foo" type="default">触发send事件</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		methods:{
			foo(){
				this.$emit('send','我是来自子组件的数据');
			}
		},
		
		props:{
			msg:{
				type:String,
				default:""
			}
		}
	}
</script>

<style>
</style>
