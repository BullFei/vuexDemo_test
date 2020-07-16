//仓库根模块
//1、引入vue
import Vue from "vue";
import Vuex from "vuex";


//调用
Vue.use(Vuex);




//生成仓库实例对象
const store = new Vuex.Store({
    state: {
        inputVal: "hello"
    },
    mutations: {
        SET_INPUTVAL(state, payload){
            state.inputVal = payload;
        }
    }
})
export default store;