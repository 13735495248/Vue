<template>
	<!-- 
	不同平台的样式以及功能存在一定的差异性,如果我们需要对不同的平台进行不同
	的处理,就需要用到条件注释去判断平台:
	1.ifdef如果是某平台,实现功能代码
	#ifdef 平台标志
	组件或js代码或css样式
	#endif
	2.ifndef如果不是某平台,实现功能代码
	#ifndef
	组件或js代码或css样式
	#endif
	
	平台标识:
	  H5:h5平台
	  MP-WEIXIN:微信平台
	 -->
	<view class="content">
		<h2>我是标题</h2>
		<!-- 组件的条件注释 -->
		<!-- #ifdef MP-WEIXIN -->
		  <hello></hello>
		<!-- #endif -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			/* #ifdef MP-WEIXIN */
			console.log('你好呀,朋友!');
			/* #endif */

		},
		
	}
</script>

<style>
	/* 样式的条件注释 */
	/* #ifdef MP-WEIXIN */
	h2{
		color: red;
	}
	/* #endif */
</style>
