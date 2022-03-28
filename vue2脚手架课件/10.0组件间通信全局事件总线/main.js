import Vue from 'vue'
import App from './App.vue'

//关闭生产安全提示
Vue.config.productionTip = false;
//注册全局事件总线
Vue.prototype.$bus = new Vue();
new Vue({
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')