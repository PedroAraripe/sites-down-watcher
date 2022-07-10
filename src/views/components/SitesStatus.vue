<template>
  <div class="sites-status">
    <div
      v-for="(site ,i) in sitesInfos"
      :key="i"
      class="site-item px-3 py-4 d-flex align-items-center justify-content-between"
    >
      <div class="d-flex align-items-center">
        <div
          class="me-3"
          :class="`circle-status site-status-${site.status ? site.status : 'undefined'}`"
        />
      
        <div class="site-name">
          {{site.site_name}}
        </div>
      </div>

      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="fa-trash"
          class="text-danger me-3"
          @click="removeFromWatchList(i)"
        />
      
        <a
          :href="site.site_url"
          class="text-black"
          target="_blank"
          rel="noopener
          noreferrer"
        >
          <font-awesome-icon
            icon="fa-arrow-up-right-from-square"
            class="text-black"
          />
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    props: {
      sitesInfos: {
        required: true,
        type: Array
      },
    },
    methods: {
      ...mapActions(["removeFromWatchList"])
    }
  }

</script>

<style lang="scss" scoped>
.sites-status {
  & > :not(:last-child) {
    border-bottom: 1px solid #0000002e;
  }

  .site-item {
    height: 40px;
    background-color: white;

    .site-name {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .circle-status {
      width: 15px;
      height: 15px;
      min-width: 15px;
      min-height: 15px;

      border: 1px solid black;

      border-radius: 50%;

      &.site-status-down {
        background-color: red;
      }

      &.site-status-up {
        background-color: green;
      }

      &.site-status-undefined {
        background-color: yellow;
      }
    }
  }


}
</style>