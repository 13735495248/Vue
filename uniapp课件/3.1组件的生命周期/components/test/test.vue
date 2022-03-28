<template>
	<view class="test">
		数字:{{num}}
		<button @click="num++" type="default">增加1</button>
		<button @click="$destroy()" type="default">销毁组件</button>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				num:1
			}
		},
		/* 组件的生命周期 */
		beforeCreate() {
			console.log('beforeCreate');
		},
		created() {
			console.log('created');
		},
		beforeMount(){
			console.log('beforeMount');
		},
		mounted() {
			console.log('mounted');
		},
		beforeUpdate(){
			console.log('beforeUpdate');
		},
		updated() {
			console.log('updated');
		},
		beforeDestroy(){
			console.log('beforeDestroy');
		},
		
		destroyed(){
			console.log('destroyed');
		}
	}
</script>

<style>
</style>
