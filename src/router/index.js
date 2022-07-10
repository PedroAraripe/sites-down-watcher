import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/Index.vue";
import EditSiteWatching from "../views/edit-site-watching/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/edit",
    name: "edit-site-watching",
    component: EditSiteWatching,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
