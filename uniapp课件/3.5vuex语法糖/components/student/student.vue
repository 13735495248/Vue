<template>
	<view class="student">
		<view class="">
			学生组件
		</view>
		分数:{{myscore}}
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			/* 
			myscore:自定义的名字
			'score':state中的变量名
			*/
			...mapState({
				myscore:'score'
			})
		}
	}
</script>

<style scoped>
	.student{
		border: 1px solid #007AFF;
		padding: 20px;
	}
</style>
