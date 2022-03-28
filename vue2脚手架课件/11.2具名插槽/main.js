import Vue from 'vue'
import App from './App.vue'
import pubsub from 'pubsub-js'

//关闭生产安全提示
Vue.config.productionTip = false;
//注册pubsub
Vue.prototype.$pubsub = pubsub;
new Vue({
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')