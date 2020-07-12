<template>
  <div>
    <h1>我是Hello组件</h1>
    <p>curCity: {{curCity}}</p>
    <button @click = "fn1('广州')">修改curCity</button>
    <button @click = 'fn2("上海")'>修改curCity 方案二</button>
    <button @click = '$store.dispatch("SYNCSETCURCITY", "重庆")'>修改curCity 方案一</button>
    <button @click = 'SYNCSETCURCITY("福州")'>修改curCity 方案三</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  name: "Hello",
  computed: {
    ...mapState(['curCity'])
  },
  methods: {
    ...mapMutations(["SETCURCITY"]),
    ...mapActions(['SYNCSETCURCITY']),
    fn1(payload){
      setTimeout(() => {
        this.SETCURCITY(payload);
      }, 2000);
    },
    fn2(name){
      this.$store.dispatch("SYNCSETCURCITY", name)
    }
  }
}
</script>

<style>

</style>