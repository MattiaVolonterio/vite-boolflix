<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    fetchMovie(query) {
      axios
        .get(
          `${store.movieURI}${store.apiKey}${this.getQuery(query)}${
            store.italianLang
          }`
        )
        .then((result) => {
          store.filmArray = result.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              originalTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              posterPath: movie.poster_path,
              overview: movie.overview,
            };
          });
        });
    },

    fetchTrendingMovie() {
      axios
        .get(`${store.movieTrendingURI}${store.apiKey}${store.italianLang}`)
        .then((result) => {
          store.filmArray = result.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              originalTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              posterPath: movie.poster_path,
              overview: movie.overview,
            };
          });
        });
    },

    fetchSeries(query) {
      axios
        .get(
          `${store.seriesURI}${store.apiKey}${this.getQuery(query)}${
            store.italianLang
          }`
        )
        .then((result) => {
          store.seriesArray = result.data.results.map((serie) => {
            return {
              id: serie.id,
              title: serie.name,
              originalTitle: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              posterPath: serie.poster_path,
              overview: serie.overview,
            };
          });
        });
    },

    fetchTrendingSeries() {
      axios
        .get(`${store.seriesTrendingURI}${store.apiKey}${store.italianLang}`)
        .then((result) => {
          store.seriesArray = result.data.results.map((serie) => {
            return {
              id: serie.id,
              title: serie.name,
              originalTitle: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              posterPath: serie.poster_path,
              overview: serie.overview,
            };
          });
        });
    },

    fetchAll(query) {
      this.fetchMovie(query);
      this.fetchSeries(query);
    },

    getQuery(text) {
      return `&query=${text}`;
    },
  },

  created() {
    this.fetchTrendingMovie();
    this.fetchTrendingSeries();
  },
};
</script>

<template>
  <AppHeader @perform-search="fetchAll" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
