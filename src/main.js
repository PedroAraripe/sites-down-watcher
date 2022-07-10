import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from "vue-toasted";
import AxiosPlugin from "./plugins/axios";
import vuetify from "./plugins/vuetify";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faArrowUpRightFromSquare,
  faUserSecret,
  faCirclePlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import "dotenv/config";

import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

Vue.use(Toasted);
Vue.use(AxiosPlugin);

library.add(
  faArrowUpRightFromSquare,
  faUserSecret,
  faCirclePlus,
  faTrash,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
