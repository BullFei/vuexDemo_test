<template>
  <div id = 'app'>
    <h1>App</h1>
    <!-- 使用 v-model 与 仓库中的 inputVal 这个state数据，绑定起来 -->
    <input type="text" v-model = "inputVal" />
    <button @click = 'fn1'>直接去修改 inputVal这个state数据</button>
  </div>
</template>

<script>

// import {mapState} from "vuex";


export default {
  name: "App",
  // computed: {
  //   ...mapState(['inputVal'])
  // },
  computed: {
    // inputVal(){
    //   return this.$store.state.inputVal;
    // }
    inputVal: {
      get(){
        return this.$store.state.inputVal;
      },
      set(newValue){
        //调用mutations的方法重设
        this.$store.commit("SET_INPUTVAL", newValue);
      }
    }
  },
  methods: {
    fn1(){
      //直接修改是可以的，但是在时间旅行部分没办法操作。
      this.$store.state.inputVal = 'world';
    }
  }
  
}
</script>
<style>

</style>