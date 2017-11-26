import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import logger from 'vuex/dist/logger'; // logger是一个日志插件
// 容器是唯一的
const state = {count:0};
import mutations from './mutations';
export default new Vuex.Store({
  state,
  mutations,
  plugins:[logger()],
  strict:true // 只能通过mutation(管理员)来更改状态，mutation不支异步
});
