import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		score:59
	},
	mutations:{
		/* 分数加1 */
		add(state){
			state.score++;
		},
		/* 分数减1 */
		sub(state){
			state.score--;
		}
	},
	
	getters:{
		result(state){
			if(state.score>59){
				return '及格'
			}else{
				return '不及格'
			}
		}
		
	}
})