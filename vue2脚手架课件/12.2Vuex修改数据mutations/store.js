import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    //state保存全局数据 和vue中的data类似
    state:{
      score:1
      
    },
    /* 
    修改state数据的方法都要写在mutations中
    注意:Vuex不允许直接修改state中的数据,如使用this.$store.state.score = 100,
    这样修改是不被允许的,因为不通过mutations的方法修改可能会造成一些数据错乱的
    问题,比如说多人开发的情况下,你用add将数据增加了1,你的同事直接使用
    this.$store.state.score = '刘备',将score改成了'刘备',这时所有用到score的地方都变成了刘备
    如何使用:组件方法中使用this.$store.commit(mutations中方法名,参数)
     */
    mutations:{
        //修改score,修改后的score等于 score+参数para
        //至少有一个形参state,如果方法传递了实参,需要添加第二个形参
        add(state,para){
            state.score = state.score + para;
        }
    },
})