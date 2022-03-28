import Vue from 'vue'
import VueRouter from 'vue-router'
import Words from './components/words.vue'
import Content from './components/content.vue'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/',component:Words},
        {path:'/words',component:Words},
        {path:'/content',name:'content',component:Content},

    ]
})