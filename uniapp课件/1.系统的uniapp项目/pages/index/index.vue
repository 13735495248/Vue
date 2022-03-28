<template>
	<!-- 
	view组件相当于div标签,在uniapp中我们使用view
	代替div
	-->
	<view class="content">
		首页
		<view class="item">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.item{
		width: 200rpx;
		height: 200rpx;
		background-color: $uni-color-error;
	}

	
</style>
