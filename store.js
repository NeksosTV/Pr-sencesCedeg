import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
    setLoggedState(state, value) {
      state.isLogged = value;
    }
  }
});

export default store;
