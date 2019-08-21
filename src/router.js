import Vue from "vue";
import Router from "vue-router";
import CompanyData from "./components/CompanyData/CompanyData.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "company-data",
      meta: { module: 'company-data' },
      component: CompanyData
    },
    {
      path: "/company-table",
      name: "company-table",
      meta: { module: 'company-table' },
      component: CompanyData
    },
    {
      path: "/company-page",
      name: "company-page",
      meta: { module: 'company-page' },
      component: CompanyData
    }
  ]
});
