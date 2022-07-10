<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["urlsToWatch"]),
  },
  methods: {
    ...mapActions(["getInstantUrlsWatchingState", "monitUrlsWatchingState"]),
  },
  created() {
    this.getInstantUrlsWatchingState();
    this.monitUrlsWatchingState();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Shippori Antique B1", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
