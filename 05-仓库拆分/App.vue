<template>
  <div id = 'app'>
    <router-view></router-view>
    <h1>App</h1>
    <p>ma模块中的name：{{namea}}</p>
    <p>mb模块中的name：{{nameb}}</p>
    <p>ma模块中firstName这个getter：{{namea_getter}}</p>
    <p>mb模块中firstName这个getter：{{nameb_getter}}</p>
    <p>ma模块中的firstName这个getter：{{$store.getters["ma/firstName"]}}</p>
    <p>mb模块中的firstName这个getter：{{$store.getters["mb/firstName"]}}</p>
    <button @click = "ma_SET_NAME('哈哈')">点我调用 ma_SET_NAME 这个mutations</button>
    <button @click = "mb_SET_NAME('呵呵')">点我调用 mb_SET_NAME 这个mutations</button>
    <button @click = "ma_SYNC_SET_NAME('傲傲')">点我调用 ma_SYNC_SET_NAME 这个 actions</button>
    <button @click = "mb_SYNC_SET_NAME('啊啊')">点我调用 mb_SYNC_SET_NAME 这个 actions</button>
    <hr>
    <p>ma模块中的name：{{$store.state.ma.name}}</p>
    <p>mb模块中的name：{{$store.state.mb.name}}</p>
    <button @click = '$store.commit("SET_NAME", "王二麻子")'>点我调用 SET_NAME 这个 mutations</button>
    <button @click = '$store.dispatch("SYNC_SET_NAME", "李三蛋子")'>点我调用 SYNC_SET_NAME 这个 actions</button>
  </div>
</template>

<script>

// import {mapActions} from "vuex";

export default {
  name: "App",
  computed: {
    //下面方法会覆盖，那么我们采用方案二取出数据
    // ...mapState("ma", ['name']),
    // ...mapState("mb", ['name'])
    namea(){
      return this.$store.state.ma.name;
    },
    nameb(){
      return this.$store.state.mb.name;
    },
    namea_getter(){
      return this.$store.getters['ma/firstName'];
    },
    nameb_getter(){
      return this.$store.getters['mb/firstName'];
    }
  },
  methods: {
    //下面方法会覆盖，那么我们采用方案二取出数据
    // ...mapMutations("ma", ['SET_NAME']),
    // ...mapMutations("mb", ['SET_NAME'])
    ma_SET_NAME(payload){
      this.$store.commit("ma/SET_NAME", payload);
    },
    mb_SET_NAME(payload){
      this.$store.commit("mb/SET_NAME", payload);
    },

    //下面方法会覆盖，那么我们采用方案二取出数据
    // ...mapActions("ma", ['SYNC_SET_NAME']),
    // ...mapActions("mb", ['SYNC_SET_NAME'])
    ma_SYNC_SET_NAME(payload){
      this.$store.dispatch("ma/SYNC_SET_NAME", payload);
    },
    mb_SYNC_SET_NAME(payload){
      this.$store.dispatch("mb/SYNC_SET_NAME", payload);
    }
  },
  created(){
    console.log(this.$store);
  }
  
}
</script>
<style>

</style>