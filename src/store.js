import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getDefaultState = () => ({
  company: {
    name: '',
    spend: '',
    spendAbility: {
      min: '',
      max: ''
    },
    notes: ''
  }
});

export default new Vuex.Store({
  state: {},
  mutations: {
    SET_DEFAULT_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_COMPANY(state, company) {
      state.company = company
    }
  },
  actions: {
    setDefaultState({ commit }) {
      commit("SET_DEFAULT_STATE")
    },
    setCompany({ commit }, company) {
      commit("SET_COMPANY", company)
    }
  },
  getters: {
    getCompany: state => {
      return state.company
    }
  }
})
