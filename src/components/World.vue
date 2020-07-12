<template>
  <div>
        <h2>我是world组件</h2>
        <p>curCityFirst{{curCityFirst}}</p>
        <p>curCity{{curCity}}</p>
        <p>cart{{cart}}</p>
  </div>
 
</template>

<script>
// 要用state 又要用 getter

import {mapState, mapGetters} from "vuex";

export default {
    //方案二 取仓库中的 getter数据
    // computed: {
    //     curCityFirst(){
    //         return this.$store.getters.curCityFirst;
    //     }
    // },
    //方案三取仓库中的getter数据
    // 1. 从vuex中导入mapGetters
    // 2. 调用mapGetters 辅助函数，将返回值赋值给computed选项即可
    // computed: mapGetters(['curCityFirst'])

    // 最好使用展开运算符来处理
    computed: {
        ...mapState(['curCity', 'cart']),
        ...mapGetters(['curCityFirst'])
    }
}
</script>

<style>

</style>