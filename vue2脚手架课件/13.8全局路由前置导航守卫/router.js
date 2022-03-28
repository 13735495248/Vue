import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
Vue.use(VueRouter);
const router = new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        /* 默认路径下重定向到登录组件 */
        {path:'/',redirect:'/login'},
        /* path路径,component路径对应的组件 */
        {path:'/login',component:Login},
        {path:'/register',component:Register}
    ]
})

router.beforeEach((to, from, next) => {
    /* 
    beforeEach方法:会在每个路由跳转之前触发,一般在路由跳转前
    做权限管理,有三个参数:
      to:要跳转的组件
      from:从哪个组件起跳
      next:next()路由正常跳转
     */
    if(to.path == '/register'){
        alert('抱歉,您无权限进入注册页面!!!');
    }else{
        next();
    }
    
})

export default router;