import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$axios = axios;
//关闭生产安全提示
Vue.config.productionTip = false;
new Vue({
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')