import Vue from "vue";
import Vuex from "vuex";
import todos from '@/stores/todo.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
  },
  strict: false,
});
