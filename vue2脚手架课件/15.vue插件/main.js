import Vue from "vue"
import App from './App.vue'
import plugin  from "./plugin.js";
//使用插件
Vue.use(plugin);
new Vue({
    render:h=>h(App)
}).$mount('#app');