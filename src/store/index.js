import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userRepos: null,
    vueContributorsNames: null,
    urlsToWatch: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserRepos(state, payload) {
      state.userRepos = payload;
    },
    setVueContributorsNames(state, payload) {
      state.vueContributorsNames = payload;
    },
    setUrlsToWatch(state, payload) {
      state.urlsToWatch = payload;
    },
  },
  actions: {
    fetchUser({ commit }, payload) {
      return axios
        .get(`https://api.github.com/users/${payload}`)
        .then(({ data }) => {
          commit("setUser", data);

          axios
            .get(data.repos_url)
            .then(({ data: repos }) => commit("setUserRepos", repos));
        });
    },
    async getInstantUrlsWatchingState({ commit }) {
      const urlsWatching = window.localStorage.getItem("urls-watching");

      if(urlsWatching?.length) {
        await axios
          .get("https://localhost/")
          .then(({ data: repos }) => commit("setUserRepos", repos));
      }

      commit("setUrlsToWatch", urlsWatching ?? []);
    },
    monitUrlsWatchingState({ commit }) {
      const urlsWatching = window.localStorage.getItem("urls-watching");

      commit("setUrlsToWatch", urlsWatching ?? []);
    },
    addUrlToWatch({ commit }, payload) {
      let urlsWatching = window.localStorage.getItem("urls-watching");
      urlsWatching = urlsWatching ? JSON.parse(urlsWatching) : [];

      urlsWatching.push(payload);
      urlsWatching = JSON.stringify(urlsWatching);

      window.localStorage.setItem("urls-watching", urlsWatching);

      commit("setUrlsToWatch", urlsWatching);
    },
    fetchVueContributors({ commit }) {
      return axios
        .get("https://api.github.com/repos/vuejs/vue/contributors")
        .then(({ data }) => {
          commit(
            "setVueContributorsNames",
            data.map((c) => c.login)
          );
        });
    },
  },
  modules: {},
});
