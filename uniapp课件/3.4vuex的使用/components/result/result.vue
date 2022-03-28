<template>
	<view class="result">
		考试结果:{{myresult}}
	</view>
</template>

<script>
	export default{
		computed:{
			myresult(){
				return this.$store.getters.result;
			}
		}
	}
</script>

<style scoped>
	.result{
		border: 1px solid #4CD964;
		padding: 20px;
	}
</style>
