## vuex是什么？

> vue官方提供的状态管理器。用于处理全局的数据共享问题的。

## vuex的仓库中的五大核心概念

- state     	    专门存共享数据的地方
- getter           可以针对现有的state数据或者其余的getter做的一个二次计算。可以理解为仓库。
- mutation     唯一能够修改state数据的东西
- action           异步操作，它里面可以写异步代码，它如果要修改state数据，是通过去调用mutation
- module        仓库模块的拆分

## 三、如何使用

1. 项目中安装vuex

```
$npm install vuex
```

2. 创建src/store.js文件。这个文件用来生效仓库的实例
3. 需要在src/main.js文件的new Vue() 的位置去配置store选项，选项值是上一个步骤中暴露出来的store的实例。

## 四、如何分辨是否已经配置好vuex的仓库了呢？

查看vueDevtools 就可以、

## 五、组件中如何使用state与getter

方案一：使用挂载到Vue原型上的$store对象。这个$store就是 new Vuex.Store() 生成的仓库实例对象

方案二：（推荐）、使用computed 

```javascript
export default {
    name: "World",
    //2.1  使用mapState(语法糖函数)
    // computed: mapState(["curCity", "cart"])
    //2.2  mapState
    computed: {
        curCity(){
            return this.$store.state.curCity;
        },
        cart(){
            return this.$store.state.cart;
        }
    }
}
```



方案三：（推荐、就是方案二的一个优雅写法）使用vuex提供的辅助函数

- mapState
- mapGetters
- mapMutations
- mapActions

 1. 组件中引入你需要的辅助函数

    ```html
    <script>
      //引入 辅助函数，采用类似解构赋值的方式
      //import Vuex from "vuex";
      //Vuex.mapState();
      //Vuex.mapGetters();
      
      import {mapState, mapGetters} from "vuex";
      export default{
        computed: mapState(['curCity','cart']);
      }
</script>
    ```
    
2. 调用赋值函数，并将其返回的值赋给组件的computed选项。

```html
<script>
  //引入赋值函数，采用类似解构赋值的方式
  import {mapState, mapGetters} from "vuex";
  export default {
    //mapState 返回值是一个对象
    computed: mapState()
  }
</script>
```

3. mapState 和 mapGetters 的语法

```javascript
mapState([state1,state2,state3]);
//mapState 接收一个数组作为参数，参数中的每一项，就是仓库中的state数据

mapGetters([getter1, getter2]);
//mapGetters 
```

###### 方案二与方案三效果等价，但是在vueDevtools中的表现有稍微一点不同。但是不影响功能。

方案二时，插件显示的是computed

方案三时，插件中显示的是vuexbindings

##### 方案二与方案三效果一样，一般我们更推荐大家使用方案三，但是在什么情况下要使用方案二呢？

希望组件中的数据与仓库中的数据用不同的名字的时候，采用方案二。

###### 使用方案三时：我们组件如果还有一些自己的computed数据，该如何办？

- 将mapState()做展开，使用...做展开。

## 六、如何修改仓库中的state与getter数据呢

> 首先明确一点，state可以修改，getter不能修改

步骤：

​	1、仓库中要提供对应state修改的mutation函数

​	2、在组件中去调用mutation

#### 调用mutation的三套方案

##### 方案一、直接使用vuex绑定到vue原型上的$store这个对象的commit()方法

##### 方案二、在组件中定义一个函数，函数名跟后续要调用的mutation名字保持一致，函数内部使用方案一。

##### 方案三、使用mapMutations  辅助函数

```javascript
//mapMutations的语法
//接收一个数组作为参数，数组中的每一项是一个mutation的名字
mapMutation([mutation1, mutation2, mutation3])
```

##### 示例代码

```javascript
{
  methods: mapMutations(["SETCURCITY"])
}
```

##### 实例代码转换就是如下的代码效果

```javascript
{
	methods: {
		SETCURCITY(payload){
			this.$store.commit("SETCURCITY", payload)
		}
	}
}
```

##### 为了结合组件自身的函数，所以mapMutations也需要使用运算符去展开

```javascript
methods: {
    ...mapMutations(["SETCURCITY", "ADDCART"]),
    fn1(){
      
    }
}
```

##### 所有的mutation执行，都能够在VueDevtools去看到（可以注意一下时间旅行）

##### 为什么vuex中的state必须使用mutation来修改呢

- 为了以一种可以预见的方式去修改数据，不至于让数据难以理解
- 为了实现时间旅行 

## 七、使用action异步的修改state数据

> 首先需要知道，mutation里面只允许同步的去修改state数据。（虽然在mutation中可以异步的去修改state数据不会报错，但是会导致时间旅行等机制没有效果）

如果异步的修改的化，有两个大方案

	1. 不涉及action，在组件上，异步代码走完之后，再去调用mutation
 	2. 使用action

使用action、首先需要在actions选项中定义action函数。

##### 注意：action中不能直接去修改state，要修改是通过context.commit() 去执行某个mutation来修改。

#### 方案一、使用$store.dispatch()来派发某个action。直接使用vuex绑定到vue原型上的$store这个对象的dispatch的方法。

```javascript
//dispatch 语法
//actionName - 要调用的action的名字
//payload - 要传递这个action的参数
this.$store.dispatch(actionName, payload);
```

#### 方案二、在组件中先定义一个函数，函数名跟后续要调用的action名字保持一致，函数内部使用方案一。

#### 方案三、使用mapActions这个辅助函数

```javascript
//mapActions的语法
//接收一个数组作为参数，数组中的每一项是一个action的名字
mapAction([action1, action2, action3])
```

示例代码：

```javascript
{
  methods: mapActions(['SYNCSETCURCITY'])
}
```

转换之后如下所示

```javascript
{
  methods: {
    SYNCSETCURCITY(){
      this.$store.dispatch('SYNCSETCURCITY', payload);
    }
  }
}
```

## 八、vuex的module

#### 一、什么时候需要在vuex中使用module

> 项目越做越大，功能点越写越多，需要使用vuex共享的数据越来越庞大的时，就需要module来进行仓库模块拆分啦。

```javascript
//拆分的仓库的子模块A
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
  //仓库子模块也可以继续去做拆分，但是没有必要搞这么复杂
  modules: {
    aa,
    ab
  }
}
//拆分的仓库子模块B
const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}
//仓库根模块
const store = new Vuex.Store({
  //通过modules选项配置子模块
  modules: {
    //key: value
    // - key - 仓库子模块的名字
    // - value - 对应的仓库子模块对象
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

#### 二、仓库拆分子模块之后，没有设置命名空间有一些问题存在

> 默认情况下，模块内部的action、mutation和getter是注册在全局命名空间的

1. 多个仓库子模块的getters不能重名，getters数据是共享的（默认情况下，模块内部的action、mutation和getter是注册在全局命名空间的）

   ![image-20200712201938367](/Users/tianyufei/Library/Application Support/typora-user-images/image-20200712201938367.png)



2. 多个仓库子模块中的mutation，如果同名的话，组件调用这个mutation时，都会被触发。
3. 多个仓库子模块中的action，如果同名的话，组件调用这个action时。都会被触发。

#### 三、由于有上面的这种问题存在，所以推荐仓库子模块设置上命名空间。

###### 1. 如何设置呢？

> 给仓库子模块的那个对象配置一个namespaced属性。属性值为true。

###### 2. 设置之后的改变是什么？

> 模块内部的action、mutation和getter是注册在自己的命名空间里的。

###### 3. 设置了命名空间之后如何在组件中使用呢？

> 基本使用步骤不变，主要是处理命名空间
>
> 1. 获取某个仓库子模块中的state（下面的xx代表某个仓库的子模块的名字）
>
>    ```javascript
>    //1. 直接通过$store
>    this.$store.state.xx
>    //2. computed
>    computed: {
>      name(){
>        return this.$store.state.xx.name;
>      }
>    }
>    //3. mapState
>    computed: {
>      ...mapState("xx", [state1, state2, state3]);
>    }
>    //4. mapState 的转换
>    computed: {
>      state1(){
>        return this.$store.state.xx.state1
>      }
>    }
>    //5. 如果要在组件中同时拿到多个仓库子模块的同名state数据，不要使用mapState，请使用方案二？
>    ```
>
>    2. 获取某个仓库子模块的getter
>
>    ```javascript
>    //1、直接通过$store
>    this.$store.getters['xx/firstName']
>    //2. 使用computed
>    computed: {
>      firstName(){
>        return this.$store.getters["ma/firstName"];
>      }
>    }
>    //3. mapGetters 的转换
>    computed: {
>      getter1(){
>        return this.$store.getters["xx/getter1"]
>      }
>    }
>    ```
>
>    ###### 3. 提交某个仓库子模块中的mutation
>
>    ```javascript
>    //1. 直接通过 $store
>    this.$store.mutations["xx/SET_NAME", payload];
>    //2. methods
>    methods:{
>      SET_NAME(payload){
>        this.$store.mutations["xx/SET_NAME", payload];
>      }
>    }
>    //3. mapMutaions
>    methods: {
>      ...mapMutations:("xx", [mutations1, mutations2])
>    }
>    //4. mapMutations的转换
>    methods: {
>      mutations1(paylaoad){
>        this.$store.commit("xx/mutation1", payload);
>      }
>    }
>    ```
>
>    ###### 4. 派发某个仓库子模块中的action
>
>    ```javascript
>    //1. 直接通过 $store
>    this.$store.dispatch("ma/SYNC_SET_NAME", payload);
>    //2. methods
>    methods: {
>      SYNC_SET_NAME(payload){
>        this.$store.dispatch("ma/SYNC_SET_NAME", payload);
>      }
>    }
>    //3. mapActions 的转换
>    methods: {
>      ...mapActions("xx", [action1, action2]);
>    }
>    //4. mapActions 的展开
>    methods: {
>      action1(payload){
>        this.$store.dispatch("xx/action1", payload);
>      }
>    }
>    ```
>
>    























