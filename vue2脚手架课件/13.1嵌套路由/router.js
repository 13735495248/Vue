import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Common from './components/common.vue'
import Vip from './components/vip.vue'
Vue.use(VueRouter);
export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        /* 默认路径下重定向到登录组件 */
        {path:'/',redirect:'/login/common'},
        /* path路径,component路径对应的组件 */
        {
            path:'/login',
            component:Login,
            /* 
            children是一个数组,用来设置子路由
            注意:子路由路径前面一般不加斜杠,
            加了斜杠路径就变成了和/login平级的路径/common了
             */
            children:[
                {path:'common',component:Common},
                {path:'vip',component:Vip}
            ]
        },
        {path:'/register',component:Register}
    ]
})