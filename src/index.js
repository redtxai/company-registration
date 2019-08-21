import 'Styles/main.scss';
import Vue from 'vue';
import router from "./router";
import store from "./store";
import MainWrapper from 'Components/MainWrapper.vue';

new Vue({
  router,
  store,
  render: createElement => createElement(MainWrapper),
  el: '#app'
});
