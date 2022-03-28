<script>
	export default {
		/* 
		onLaunch,onShow,onHide三个应用生命周期的钩子函数
		应用生命周期仅可在App.vue中监听，在其它页面监听无效 
		*/
		/* 应用初始化完成触发 */
		onLaunch: function() {
			console.log('App Launch')
			
		},
		/* 应用启动或从后台进入到前台触发 */
		onShow: function() {
			console.log('App Show')
		},
		/* 应用从前台进入到后台触发 */
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
