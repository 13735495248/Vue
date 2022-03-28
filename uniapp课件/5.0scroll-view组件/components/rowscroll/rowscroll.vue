<template>
	<view class="rowscroll">
		<view class="">
			scroll-view横向局部滑动
		</view>
		<view class="">
			<!-- 
			横向滑动需要的设置:
			scroll-view组件上:将scroll-x设置为true,并将scroll-view
			的white-space属性设置为nowrap
			可以滑动的子元素上:将子元素display设置为inline-block
			-->
			<scroll-view class="sv" scroll-x="true">
				<view class="item"
				:class="{bgcolor:index%2===0?true:false}"
				 v-for="(item,index) in list" 
				 :key='index'>
					{{item}}
				</view>
			</scroll-view>
		</view>
		
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
	
		.sv{
			white-space:nowrap;
			width:100vw;
		}
		.item{
			display: inline-block;
			width: 200px;
			height: 100px;
			background-color:#4CD964;
		}
		
		.bgcolor{
			background-color: #007AFF;
		}
	
</style>
