import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './components/main.vue'
import list1 from './components/list1.vue'
import list2 from './components/list2.vue'
//解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
export default new VueRouter({
    //配置路由规则:即设置路径对应的组件
    routes:[
        
        {
            path:'/',
            component:main,
            name:'main',
            children:[
                {path:'/',name:'list1',component:list1},
                {path:'/list2',name:'list2',component:list2},
            ]
        },
    ]
})