<template>
  <div>
    <h1>我是Hello组件</h1>
    <p>{{$store.state.curCity}}</p>
    <p>{{this.$store.getters.curCityFirst}}</p>
  </div>
</template>

<script>
export default {
  name: "Hello"
};
</script>

<style>
</style>