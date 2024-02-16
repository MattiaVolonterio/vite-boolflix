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
      <div v-if="store.isTrending">
        <!-- TRENDING MOVIES SECTION -->
        <div
          v-if="
            store.filterSelection == 'HOME' || store.filterSelection == 'FILM'
          "
          class="row g-3"
        >
          <h2 class="section-title">TRENDING MOVIES</h2>
          <div v-for="movie in store.filmArray" class="col-3">
            <AppCard :object="movie" :key="movie.id" />
          </div>
        </div>

        <!-- TRENDING SERIES SECTION -->
        <div
          v-if="
            store.filterSelection == 'HOME' || store.filterSelection == 'SERIE'
          "
          class="row g-3"
        >
          <h2 class="section-title">TRENDING SERIES</h2>
          <div v-for="serie in store.seriesArray" class="col-3">
            <AppCard :object="serie" :key="serie.id" />
          </div>
        </div>
      </div>

      <div v-if="!store.isTrending">
        <!-- MOVIES SECTION -->
        <div
          v-if="
            store.filterSelection == 'HOME' || store.filterSelection == 'FILM'
          "
          class="row g-3"
        >
          <h2 class="section-title">MOVIES</h2>
          <div v-for="movie in store.filmArray" class="col-3">
            <AppCard :object="movie" :key="movie.id" />
          </div>
        </div>
        <!-- SERIES SECTION -->
        <div
          v-if="
            store.filterSelection == 'HOME' || store.filterSelection == 'SERIE'
          "
          class="row g-3"
        >
          <h2 class="section-title">SERIES</h2>
          <div v-for="serie in store.seriesArray" class="col-3">
            <AppCard :object="serie" :key="serie.id" />
          </div>
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
