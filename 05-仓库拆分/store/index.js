//仓库根模块
//1、引入vue
import Vue from "vue";
import Vuex from "vuex";

//引入拆分出来的仓库子模块
import moduleA from "./modules/a";
import moduleB from "./modules/b";

//调用
Vue.use(Vuex);




//生成仓库实例对象
const store = new Vuex.Store({
    //只配置modules
    modules: {
        ma: moduleA,
        mb: moduleB
    }
})
export default store;