//拆分出来的子模块b

export default {
    //命名空间
    namespaced: true, 
    state: {
        name: "b"
    },
    getters: {
        firstName(state){
            return state.name.substring(0, 1);
        }
    },
    mutations: {
        SET_NAME(state, payload){
            console.log("b");
            state.name = payload;
        }
    },
    actions: {
        SYNC_SET_NAME(context, payload){
            console.log("b-b");
            setTimeout(() => {
                //调用SET_NAME 这个 mutation 来修改 state 数据
                context.commit("SET_NAME", payload);
            }, 2000);
        }
    }
}