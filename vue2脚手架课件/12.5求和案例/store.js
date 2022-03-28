import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    //state保存全局数据 和vue中的data类似
    state:{
      a:0,
      b:0,
      s:0,
      
    },
    mutations:{
        //求s,是a和b的和
        sum(state){
            state.s = state.a + state.b;
        },
        //修改a
        modia(state,para){
            state.a = para;
        },
        //修改b
        modib(state,para){
            state.b = para;
        }
    },
    
})