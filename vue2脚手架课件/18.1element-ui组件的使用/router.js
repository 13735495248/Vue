import Vue from 'vue'
import VueRouter from 'vue-router'
import mymain from './components/mymain.vue'
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        { path: '/', component: mymain },
        {
            path: '/elcontainer',
            component: () => import('./components/el-container/elcontainer.vue'),
            children:[
                {
                    path:'/elcontainer',
                    component: () => import('./components/el-container/list1.vue')
                },
                {
                    path:'/list2',
                    component: () => import('./components/el-container/list2.vue')
                }
            ]
        },
        {
            path: '/elcard',
            component: () => import('./components/el-card/elcard.vue')
        },
        {
            path: '/elrow',
            component: () => import('./components/el-row/elrow.vue')
        },
        {
            path: '/elicon',
            component: () => import('./components/el-icon/elicon.vue')
        },
        {
            path: '/elmenu',
            component: () => import('./components/el-menu/elmenu.vue')
        }
    ]
})