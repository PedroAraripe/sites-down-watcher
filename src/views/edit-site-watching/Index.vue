<template>
  <section>
    <main style="color: green; display: flex; flex-direction: column">
      Adicionar novo site para monitorar

      <form @submit.prevent="createSiteToWatch">   
        <input v-model="newSiteUrl" placeholder="Site url" />
        <input v-model="newSiteName" placeholder="Site name" @keyup.enter="createSiteToWatch" />
      </form>
      <div>
        {{ urlsToWatch }}
      </div>
    </main>
  </section>
</template>
<script>

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      sitesWatching: [],
      newSiteUrl: "",
      newSiteName: "",
    };
  },
  computed: {
    ...mapState(["urlsToWatch"])
  },
  methods: {
    ...mapActions(["addUrlToWatch"]),
    createSiteToWatch() {
      if(this.newSiteUrl) {
        const site_url = this.newSiteUrl;
        const site_name = this.newSiteName ?? this.siteUrl;

        this.addUrlToWatch({
          site_url,
          site_name,
        })

      }
    }
  },
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  overflow: hidden;

  .moving-texts {
    position: absolute;
    z-index: 0;
  }

  .card-wrapper-login {
    z-index: 1;
  }

  min-height: 100vh;
  background-color: rgb(10, 10, 10);

  & main {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    max-width: 100vw;
    overflow: hidden;

    background-color: #272a37;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  & > h1 {
    font-size: 2rem;
    color: #aeeac9;
    margin-bottom: 2.3rem;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
      font-size: 2.5rem;
      margin-bottom: 1.3rem;
    }
  }

  & .wrapper-inputs {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 992px) {
      flex-direction: row;
    }

    & input {
      width: 100%;

      padding: 1rem;
      margin-bottom: 2.5rem;

      border: 1px solid #aeeac9;
      outline: none;
      border-radius: 10px;
      background-color: #323644;
      color: #aeeac9;

      @media (min-width: 992px) {
        flex-grow: 1;
        min-width: 300px;
        margin-right: 2rem;
        margin-bottom: 0rem;
        font-size: 20px;
      }
    }

    & button {
      width: 100%;

      padding: 1rem 2rem;
      font-size: 1rem;

      font-weight: bold;

      cursor: pointer;

      background-color: #21262d;
      color: #63e99f;
      border: 1px solid #63e99f;
      border-radius: 5px;

      transition: all 0.3s;

      @media (min-width: 992px) {
        width: fit-content;
        font-size: 20px;
      }

      &:hover {
        background-color: #2d534a;
        box-shadow: 0 0 30px hsl(215deg 30% 23%);
      }
    }
  }

  &.no-user-found {
    & ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #e33636;
      opacity: 1; /* Firefox */
    }

    & :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #e33636;
    }

    & ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #e33636;
    }
  }
}
</style>
