import Vue from 'vue'
/* 引入Vuex插件 */
import Vuex from 'vuex'
/* use:使用插件 */
Vue.use(Vuex)

export default new Vuex.Store({
    /* 
    state保存全局数据,类似于Vue实例中的data,
    不过data是局部使用,而state全局可用 
    如何使用:在组件中的computed中定义计算属性,return this.$store.state.score
    使用定义的计算属性就可以获取到state中的score
    */
    state:{
      score:99
    }
    
})