import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        /* 水果列表 */
        list:[
            {name:'苹果',price:10,select:false},
            {name:'梨子',price:21,select:false},
            {name:'菠萝',price:17,select:false},
            {name:'桃子',price:11,select:false},
            {name:'芒果',price:22,select:false},
        ]
    },

    getters:{
        /* 
        sum总价的求法:先filter过滤掉没选中的,形成新数组A,再用map将A
        变成数组元素是选中水果的价格的数组,最后reduce求和即可得到总价 
        */
        sum(state){
            return state.list.filter(item=>{
                return item.select === true;
            }).map(item=>{
                return item.price;
            }).reduce((a,b)=>{
              return a+b;
            },0)
        }
    }
})