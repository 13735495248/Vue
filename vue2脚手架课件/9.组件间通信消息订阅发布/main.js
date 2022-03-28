import Vue from 'vue'
import App from './App.vue'
/* 需要npm引入第三方库pubsub-js */
//import pubsub from 'pubsub-js'
/* 或者使用自己写的消息订阅发布文件PubSub.js */
import mypubsub from './PubSub.js'
//关闭生产安全提示
Vue.config.productionTip = false;
//注册pubsub
//Vue.prototype.$pubsub = pubsub;
Vue.prototype.$mypubsub = mypubsub;
new Vue({
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')