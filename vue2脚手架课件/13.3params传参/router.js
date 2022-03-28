import Vue from 'vue'
import VueRouter from 'vue-router'
import Words from './components/words.vue'
import Content from './components/content.vue'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/',component:Words},
        {path:'/words',component:Words},
        /* 
        params传参要在路径后面用冒号拼参数名
        并且必须设置路由name,否则传参会失败
         */
        {path:'/content/:title/:introduction',name:'content',component:Content},

    ]
})