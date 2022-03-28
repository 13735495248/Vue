<template>
	<view class="student">
		<view class="">
			学生组件
		</view>
		分数:{{myscore}}
	</view>
</template>

<script>
	export default{
		computed:{
			myscore(){
				return this.$store.state.score;
			}
		}
	}
</script>

<style scoped>
	.student{
		border: 1px solid #007AFF;
		padding: 20px;
	}
</style>
