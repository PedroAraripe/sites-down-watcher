<template>
  <section>
    <main style="color: green; display: flex; flex-direction: column">
      <div class="row mx-0">
        <div class="col-lg-6 px-0 sites-list-col d-flex flex-column">
          <sites-status v-if="urlsToWatch" :sites-infos="urlsToWatch" class="flex-grow-1" />
          <div v-else class="flex-grow-1 p-4 h4 text-center">
            Looks like you don't have any sites watching yet, starting adding one!
          </div>
          
          <button
            @click="dialog = true"
            class="btn w-100 bg-white dialog-start-button"
          >
            <font-awesome-icon
              icon="fa-circle-plus"
              class="h4 mb-0 text-success"
            />

          </button>
        </div>
      </div>

    </main>
    <div data-app>
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
        <template>
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >
              Add new site to watch
            </v-toolbar>

            <v-card-text>
              <form @submit.prevent="createSiteToWatch" class="pt-5 pb-4 d-flex flex-column">
                <input v-model="newSiteUrl" placeholder="Site url" class="mb-3" />

                <input
                  v-model="newSiteName"
                  placeholder="Site name"
                  @keyup.enter="createSiteToWatch"
                />
              </form>
            </v-card-text>
            <v-card-actions>
              <div class="w-100 d-flex align-items-center justify-content-between">
                <v-btn
                  text
                  class="flex-grow-1"
                  @click="dialog = false"
                >
                  Close
                </v-btn>

                <v-btn
                  text
                  class="flex-grow-1 bg-success text-white"
                  @click="createSiteToWatch"
                >
                  Save
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </section>
</template>
<script>

import { mapState, mapActions } from "vuex";
import SitesStatus from "../components/SitesStatus.vue";

export default {
  components: {
    SitesStatus
  },
  data() {
    return {
      dialog: false,
      sitesWatching: [],
      newSiteUrl: "",
      newSiteName: "",
    };
  },
  watch: {
    sitesWatchingLength: {
      handler(newValue) {
        if(!newValue) {
          this.dialog = true;
        }
      }
    }
  },
  computed: {
    ...mapState(["urlsToWatch"]),
    sitesWatchingLength() {
      return this.urlsToWatch?.length;
    }
  },
  methods: {
    ...mapActions(["addUrlToWatch"]),
    createSiteToWatch() {
      if (this.newSiteUrl) {
        const site_url = this.newSiteUrl;
        const site_name = this.newSiteName ?? this.siteUrl;

        this.addUrlToWatch({
          site_url,
          site_name,
        });
      }

      this.dialog = false;
    },
  },
};
</script>
<style lang="scss" scoped>
  .sites-list-col {
    min-height: 100vh;
    background-color: white;

    .dialog-start-button {
      border-radius: initial;
      border-top: 1px solid #0000002e;
    }
  }
    
  form {
    & > * {
      border-bottom: 1px solid black;
      padding: 0.3rem
    }
  }
</style>
