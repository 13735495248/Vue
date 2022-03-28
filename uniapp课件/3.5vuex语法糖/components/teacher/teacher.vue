<template>
	<view class="teacher">
		<view class="">
			老师组件
		</view>
		<view class="">
			分数:{{myscore}}
		</view>
		<button @click="add" type="default">分数加1</button>
		<button @click="sub" type="default">分数减1</button>
		
		
	</view>
</template>

<script>
	/*
	vuex语法糖:
	可以通过mapState mapMutations mapGetters映射vuex数据到组件
	*/
	import {mapState,mapMutations} from 'vuex'
	export default{
		//原先获取score的写法
		// computed:{
		// 	myscore(){
		// 		return this.$store.state.score;
		// 	}
		// },
		
		//使用mapState
		// computed:mapState({
		// 	myscore:'score'
		// }),
		
		//mapstate使用对象扩展
		computed:{
			/*
			myscore:自定义的名字
			'score':state中的变量名
			*/
			...mapState({
				myscore:'score'
			})
		},
		methods:{
			...mapMutations({
				add:'add',
				sub:'sub'
			})
			
		}
	}
</script>

<style scoped>
	.teacher{
		border: 1px solid #007AFF;
		padding: 20px;
	}
</style>
