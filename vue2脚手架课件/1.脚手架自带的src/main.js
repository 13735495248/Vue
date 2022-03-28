/* 
该文件是整个项目的入口文件
vue inspect > output.js 可以查看配置文件
配置文件中设置了应用的入口entry 
*/

import Vue from 'vue'
//引入App组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  //将App组件放入容器中
  render: h => h(App),
  /*
  上面的代码是下面的简写:目的是以App组件生成一个虚拟节点,然后返回给
  render方法渲染成真实dom,将下面的函数写成箭头函数并将createElement
  替换成h就成了上面的render:h=>h(APP)形式,h是hyperscript的缩写,意思是生成
  html结构的脚本
  render:function(createElement){
    return createElement(APP);
  }
  */
}).$mount('#app')//将vue实例挂载到id是app的容器
