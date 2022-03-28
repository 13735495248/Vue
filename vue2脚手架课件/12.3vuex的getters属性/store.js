import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    //state保存全局数据 和vue中的data类似
    state:{
      a:1,
      b:1,
      
    },
    mutations:{
        //a增加1
        add(state,para){
            
            state.a++;
            
        }
    },
    /* 
    类似计算属性,依赖于state中的数据,依赖的数据变化,getters中的数据就会变化
    如何使用:
     */
    getters:{
        sum(state){
            return state.a+state.b;
        }
    }
})