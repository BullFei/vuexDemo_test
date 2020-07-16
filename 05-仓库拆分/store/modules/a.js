//拆分出来的仓库子模块a
//仓库子模块其实就是一个包含有state、getters、actions、mutations、actions的对象

export default {
    //命名空间
    namespaced: true, 
    state: {
        name: "张三"
    },
    getters: {
        firstName(state, getters, rootStates){
            console.log(getters);
            console.log(rootStates.mb.name); //可以通过它获取别的模块上的数据
            
            return state.name.substring(0, 1);
        }
    },
    mutations: {
        SET_NAME(state, payload){
            
            state.name = payload;
        }
    },
    actions: {
        SYNC_SET_NAME(context, payload){
            console.log("a-a");
            setTimeout(() => {
                //调用SET_NAME 这个 mutation 来修改 state 数据
                context.commit("SET_NAME", payload);
            }, 2000);
        }
    }
}