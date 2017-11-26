// vuex 平级组件交互，找共同的父级解决，跨组件交互，eventBus混乱（发布订阅）

// vuex主要借鉴了 （flux redux）,vuex只能在vue中使用（单独为vue开发的）

// vuex为了大型项目，主要是（状态）管理,将数据统一管理

import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger'; // logger是一个日志插件
import App from './App.vue';
Vue.use(Vuex);
// 容器是唯一的
const state = {count:0};
const mutations = {
  add(state,count){ // state是自动放入的，默认指的就是当前的state
    state.count+=count;
  },
  minus(state){
    state.count-=1;
  }
};
const store = new Vuex.Store({
  state,
  mutations,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});
// 计数器
new Vue({
  el:'#app',
  ...App,
  store //store被注册到了实例上 所有组件都会有一个属性 this.$store
});
