<script>
	export default {
		/* uniapp初始化时触发一次,应用运行过程中只会触发一次 */
		onLaunch: function() {
			console.log('App Launch')
		},
		/* 第一次启动,或从后台进入前台触发 */
		onShow: function() {
			console.log('App Show')
		},
		/* 从前台进入后台触发 */
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
