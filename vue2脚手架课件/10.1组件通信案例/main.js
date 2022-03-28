import  Vue from 'vue'
import App from './App.vue'
import local from './local.js'
//原型上添加全局事件总线
Vue.prototype.$bus = new Vue();
Vue.prototype.$local = local;
new Vue({
    render:h=>h(App)
}).$mount('#app')
