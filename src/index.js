import 'Styles/main.scss';
import Vue from 'vue';
import router from "./router";
import MainWrapper from 'Components/MainWrapper.vue';

new Vue({
  router,
  render: createElement => createElement(MainWrapper),
  el: '#app'
});
