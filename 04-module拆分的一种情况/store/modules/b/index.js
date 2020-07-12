//仓库根模块
//1、引入vue
import Vue from "vue";
import Vuex from "vuex";

//调用
Vue.use(Vuex);

//引入仓库根模块的state、mutations、getters、actions
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";
import actions from "./actions";



//生成仓库实例对象
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
export default store;