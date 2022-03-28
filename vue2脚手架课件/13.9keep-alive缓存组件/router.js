import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
Vue.use(VueRouter);
export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        /* 默认路径下重定向到登录组件 */
        {path:'/',redirect:'/login'},
        /* path路径,component路径对应的组件 */
        {path:'/login',component:Login},
        {path:'/register',component:Register}
    ]
})