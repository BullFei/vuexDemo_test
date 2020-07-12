//仓库根模块的state设置
export default {
    firstName(state){
        return state.name.substring(0, 1);
    }
}