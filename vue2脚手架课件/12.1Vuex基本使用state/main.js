import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false;
new Vue({
    //注册store,注册好后,在组件中就可以通过this.$store获取store中的数据了
    store,
    //将App组件放入容器中 
    render:h=>h(App)
}).$mount('#app')