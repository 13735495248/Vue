<template>
	<view class="content">
		<view class="statusbar"></view>
		<view class="">
			{{msg}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello uniapp',
				ary: [
					'窗前明月光',
					'疑是地上霜',
					'举头望明月',
					'低头思故乡',
					'离离原上草',
					'一岁一枯荣',
					'野火烧不尽',
					'春风吹又生'
				]
			}
		},
		/* 监听下拉刷新事件 */
		onPullDownRefresh() {
			console.log('监听到了下拉操作');
			//获取随机索引
			let index = Math.floor(Math.random() * 9);
			this.msg = this.ary[index];
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
	.statusbar {
		height: var(--status-bar-height);
	}
</style>
