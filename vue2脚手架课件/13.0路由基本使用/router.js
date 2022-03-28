import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
Vue.use(VueRouter);
export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        /* path:路径,component:路径对应的组件 */
        {path:'/',component:Login},
        {path:'/register',component:Register}
    ]
})