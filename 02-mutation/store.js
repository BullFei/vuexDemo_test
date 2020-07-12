//1、引入vue
import Vue from "vue";
//2、引入vuex
//vuex 完整的取出赋值给vuex
//vuex.Store 赋值给 Store
import Vuex,{Store} from "vuex";
//3、进行调用
Vue.use(Vuex);


//实例化Vuex的仓库实例对象
const store = new Store({
  //配置选项
  //1、state
  state: {
    curCity: "深圳",
    cart: [{id: 1, name: "apple"}, {id: 2, name: "banana"}]
  },
  //2、getters里面设置getters
  getters: {
    // key: value
    // key - 一个 getter 的名字
    // value - 响应的getter的计算函数。与computed一样，必须有返回值，返回值就是当前getter的值
            // 会自动接收到state这个参数，参数的内容就是当前仓库的state的数据
    curCityFirst(state){
      return state.curCity.substring(0, 1);
    }
  },
  //3、mutations 里面设置mutation
  mutations: {
    //key: value
    //key - mutation的名字
    //value - 对应的这个mutation的执行函数
    // 会受到两个参数  state(当前的state数据)  payload(调用这个mutations时传递过来的参数)
    SETCURCITY(state, payload){
      console.log(payload);
      state.curCity = payload;
    },
    ADDCART(state, payload){
      //payload  必须是 {id: xx, name: yyy}
      state.cart.push(payload);
    }
  },
  //4. action  里面设置 action
  action: {

  },
  //5. modules 里面设置 module
  modules: {

  }
})


//end  不要忘了暴露 store
export default store;
