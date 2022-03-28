import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
Vue.use(VueRouter);
export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        
        /* path路径,component路径对应的组件 */
        {path:'/',component:()=>import('./components/main.vue')},
        {path:'/login',component:Login},
    ]
})