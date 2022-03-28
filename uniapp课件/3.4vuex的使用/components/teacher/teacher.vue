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
	export default{
		computed:{
			myscore(){
				return this.$store.state.score;
			}
		},
		methods:{
			add(){
				this.$store.commit('add');
			},
			
			sub(){
				this.$store.commit('sub');
			}
		}
	}
</script>

<style scoped>
	.teacher{
		border: 1px solid #007AFF;
		padding: 20px;
	}
</style>
