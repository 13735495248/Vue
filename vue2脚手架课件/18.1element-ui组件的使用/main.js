import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//注册路由
export default new Vue({
    router,
    render:h=>h(App)
}).$mount("#app");