import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

//注册路由
export default new Vue({
    router,
    render:h=>h(App)
}).$mount("#app");