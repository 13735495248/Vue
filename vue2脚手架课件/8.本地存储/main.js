import Vue from 'vue'
import App from './App.vue'
import localSave from './localSave.js'
//关闭生产安全提示
Vue.config.productionTip = false;
Vue.prototype.$localSave = localSave;
new Vue({
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')