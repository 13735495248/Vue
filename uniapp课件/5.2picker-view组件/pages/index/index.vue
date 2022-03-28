<template>
	<view>
		<button @click="flag=!flag" type="default">显示/隐藏picker</button>
		<!-- 
		indicator-style:选择器中间选中框的样式
		value:默认选择第几个,值是一个数组,如[0]表示默认选择第一个
		change事件:滚动选择的时候触发
		-->
		<picker-view class="picker-view" v-show="flag" indicator-style="height: 50px;" :value="value"
			@change="bindChange">
			<picker-view-column :value="value">
				<view class="content" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</picker-view-column>
		</picker-view>

		<picker @change="bindChange1" :value="index" :range="list">
			<view class="content">{{list[index]}}</view>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				value: [1],
				list: ['苹果', '梨子', '菠萝', '桃子'],
				index:0,
			}
		},

		methods: {
			bindChange(event) {
				//获取当前选中的索引
				let index = event.detail.value[0];
				console.log(index);
			},
			bindChange1(event) {
				//获取当前选中的索引
				this.index = event.target.value;
				
			}
		}

	}
</script>

<style>
	.picker-view {
		height: 300px;
	}

	.content {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
