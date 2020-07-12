<template>
  <div id = 'app'>
    <h1>hello world</h1>
    <p>{{$store.state.curCity}}</p>
    <p>{{this.$store.getters.curCityFirst}}</p>
    <hr />
    <Hello></Hello>
    <hr />
    <World></World>
  </div>
</template>

<script>
import Hello from "./components/Hello";
import World from "./components/World";
export default {
  name: "App",
  components:{
    Hello,
    World
  },
  created(){
    console.log(this.$store.state.curCity);
    console.log(this.$store.getters.curCityFirst);
  }
}
</script>
<style>

</style>