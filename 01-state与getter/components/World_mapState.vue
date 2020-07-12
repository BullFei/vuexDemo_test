<template>
  <div>
      我是world组件
       <p>curCity: {{curCity}}</p>
       <ul>
           <li v-for="item in cart" :key = 'item.id'>
               {{item.name}}
           </li>
       </ul>
  </div>
 
</template>

<script>
// 1、引入vuex中的mapState这个辅助函数
import {mapState} from "vuex";

export default {
    data(){
        return {
            name: "张三"
        }
    },
    name: "World",
    //2.1  使用mapState(语法糖函数)
    // computed: mapState(["curCity", "cart"])
    //2.2  mapState
    // computed: {
    //     a(){
    //         return this.$store.state.curCity;
    //     },
    //     b(){
    //         return this.$store.state.cart;
    //     },
    // }
    //2.3  使用mapState展开
    computed: {
        ...mapState(["curCity", "cart"]),
        nameFirst(){
            return this.name.substring(0, 1);
        }
    }
}
</script>

<style>

</style>