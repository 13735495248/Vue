<template>
	<view class="columnscroll">
		<view class="">
			scroll-view纵向局部滑动
		</view>
		<!-- 
		纵向滑动:
		scroll-y设置为true;
		给scroll-view固定高度height;
		-->
		<scroll-view scroll-y="true" class="sv" >
			<view class="item"
			:class="{bgcolor:index%2===0?true:false}"
			 v-for="(item,index) in list" 
			 :key='index'>
				{{item}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[1,2,3,4,5,6,7,8]
			}
		}
	}
</script>

<style scoped>
	.item{
		width: 200px;
		height: 100px;
		background-color:#4CD964;
	}
	
	.bgcolor{
		background-color: #007AFF;
	}
	.sv{
		height: 200px;
	}
</style>
