<template>
  <div>
    <h1>我是Hello组件</h1>
    <ul>
      <li v-for = "item in cart" :key = "item.id">{{item.name}}</li>
    </ul>
    <p>{{curCity}}</p>
    <button @click = "ADDCART({id:3,name:'orange'})">给购物车添加一个orange</button>
    <button @click = "$store.commit('SETCURCITY','广州')">修改curCity方案一</button>
    <button @click = "SETCURCITY('成都')">修改仓库中的curCity方案二</button>
  </div>
</template>

<script>
// mapState mapGetters 是用在 computed上的
// mapMutations  mapActions 是用在 methods 上的
import {mapState, mapMutations} from "vuex";
export default {
  name: "Hello",
  computed: {
    ...mapState(["curCity", "cart"])
  },
  // methods: {
  //   SETCURCITY(){
  //     //方案一去修改state
  //     // this.$store.commit(mutations的名字, 传递给mutation的参数)
  //     this.$store.commit("SETCURCITY", "成都");
  //   }
  // }
  // methods: mapMutations(["SETCURCITY", "ADDCART"])
  methods: {
    ...mapMutations(["SETCURCITY", "ADDCART"]),
    fn1(){
      
    }
  }
};
</script> 

<style>
</style>