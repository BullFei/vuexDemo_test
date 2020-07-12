import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Hello from "./components/Hello";
import World from "./components/World";
import Demo from "./components/Demo";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello,
      meta: {
        title: "hello"
      }
    },
    {
      path: "/world",
      name: "World",
      component: World,
      meta: {
        title: "world"
      }
    },
    {
      path: "/demo",
      name: "Demo",
      component: Demo,
      meta: {
        title: '蓝湖'
      }
    }
  ]
})

export default router;