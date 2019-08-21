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
    setDefaultState(state) {
      Object.assign(state, getDefaultState());
    },
    SET_COMPANY(state, company) {
      state.company = company;
    }
  },
  actions: {
    setCompany({ commit }, company) {
      commit("SET_COMPANY", company);
    }
  },
  getters: {
    getCompany: state => {
      return state.company;
    }
  }
})
