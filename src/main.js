import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from 'vue-toasted';
import AxiosPlugin from './plugins/axios';

import 'dotenv/config';

import "./scss/app.scss";

Vue.use(Toasted);
Vue.use(AxiosPlugin);

Vue.config.productionTip = false;
 
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
