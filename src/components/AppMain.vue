<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard },
};
</script>

<template>
  <main>
    <div class="container">
      <!-- MOVIES SECTION -->
      <div class="row g-3">
        <h2 class="section-title">MOVIES</h2>
        <div v-for="movie in store.filmArray" class="col-3">
          <AppCard :object="movie" />
        </div>
      </div>
      <!-- SERIES SECTION -->
      <div class="row g-3">
        <h2 class="section-title">SERIES</h2>
        <div v-for="serie in store.seriesArray" class="col-3">
          <AppCard :object="serie" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

main {
  height: calc(100vh - $header-height);
  background-color: #434343;
  overflow: auto;

  .container {
    margin-bottom: 2rem;
    .section-title {
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: white;
      font-size: 2.5rem;
      font-weight: bolder;
    }
  }
}
</style>
