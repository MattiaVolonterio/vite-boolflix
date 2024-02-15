<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
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
              title: movie.title,
              originalTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              posterPath: movie.poster_path,
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
              title: serie.name,
              originalTitle: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              posterPath: serie.poster_path,
            };
          });
        });
    },

    fetchAll(query) {
      this.fetchMovie(query);
      this.fetchSeries(query);
    },

    getFlag(lang) {
      if (lang == "it") return (lang = "https://flagsapi.com/IT/flat/32.png");
      if (lang == "en") return (lang = "https://flagsapi.com/US/flat/32.png");
      if (lang == "de") return (lang = "https://flagsapi.com/DE/flat/32.png");
      if (lang == "fr") return (lang = "https://flagsapi.com/FR/flat/32.png");
      if (lang == "ja") return (lang = "https://flagsapi.com/JP/flat/32.png");
      return (lang = "https://flagsapi.com/ZW/flat/32.png");
    },

    getPosterPath(query) {
      if (query) {
        return `${store.imageURI}${query}`;
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
      }
    },

    setRating(rating) {
      const starRating = Math.ceil(rating / 2);
      return starRating;
    },

    getQuery(text) {
      return `&query=${text}`;
    },
  },
};
</script>

<template>
  <AppHeader @perform-search="fetchAll" />
  <div class="container">
    <!-- MOVIE -->
    <div class="movie-result">
      <ul v-for="movie in store.filmArray">
        <li>{{ "Titolo: " + movie.title }}</li>
        <li>{{ "Titolo originale: " + movie.originalTitle }}</li>
        <li>
          "Lingua originale:
          <img
            :src="getFlag(movie.language)"
            alt="flag"
            class="flag-image d-inline"
          />
          "
        </li>
        <li>
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= setRating(movie.vote)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
        </li>
        <li>
          <img
            :src="getPosterPath(movie.posterPath)"
            alt="immagine"
            :class="movie.posterPath ? '' : 'void-poster'"
          />
        </li>
      </ul>
    </div>
    <!-- SERIES -->
    <div class="series-result">
      <ul v-for="serie in store.seriesArray">
        <li>{{ "Titolo: " + serie.title }}</li>
        <li>{{ "Titolo originale: " + serie.originalTitle }}</li>
        <li>
          "Lingua originale:
          <img
            :src="getFlag(serie.language)"
            alt="flag"
            class="flag-image d-inline"
          />
          "
        </li>
        <li>
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= setRating(serie.vote)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
        </li>
        <li>
          <img
            :src="getPosterPath(serie.posterPath)"
            alt="immagine"
            :class="serie.posterPath ? '' : 'void-poster'"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
