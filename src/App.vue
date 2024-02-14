<script>
import { store } from "./store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      searchForm: "",
      flagURL: "",
    };
  },

  computed: {
    searchQuery() {
      return `&query=${this.searchForm}`;
    },
  },

  methods: {
    fetchMovie() {
      axios
        .get(
          `${store.movieURI}${store.apiKey}${this.searchQuery}${store.italianLang}`
        )
        .then((result) => {
          store.requestMovie = result.data.results;
          this.searchForm = "";
        });
    },

    fetchSeries() {
      axios
        .get(
          `${store.seriesURI}${store.apiKey}${this.searchQuery}${store.italianLang}`
        )
        .then((result) => {
          store.requestSeries = result.data.results;
          this.searchForm = "";
        });
    },

    getFlag(lang) {
      if (lang == "en" || lang == "it") {
        return new URL(`./assets/flags/${lang}.svg`, import.meta.url).href;
      } else {
        return new URL(`./assets/flags/other.svg`, import.meta.url).href;
      }
    },
  },
};
</script>

<template>
  <div class="search-form">
    <input v-model="searchForm" type="text" placeholder="Search movie" />
    <button @click="fetchMovie()">Cerca</button>
  </div>
  <div class="lists-result">
    <ul v-for="movie in store.requestMovie">
      <li>{{ "Titolo: " + movie.title }}</li>
      <li>{{ "Titolo originale: " + movie.original_title }}</li>
      <li>
        <img
          :src="getFlag(movie.original_language)"
          alt="flag"
          class="flag-image"
        />
        {{ "Lingua originale: " + movie.original_language }}
      </li>

      <li>{{ "Valutazione: " + movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
