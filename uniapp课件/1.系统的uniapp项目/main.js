/* 引入App组件 */
import App from './App'
// #ifndef VUE3
/* 引入Vue */
import Vue from 'vue'
/* 
关闭生产环境提示
*/
Vue.config.productionTip = false
/* 应用类型 */
App.mpType = 'app'
/* 
...App扩展运算将App中的所有属性以及属性值拷贝到
配置对象的options属性中
*/
const app = new Vue({
    ...App
	//render:h=>h(App)
})
console.log('App:',App);
console.log('app:',app);
app.$mount()
// #endif

/*
//#ifdef VUE3 
里面的代码只会在项目是vue3的情况下运行
// #endif

*/
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif