<script>
import { store } from "./store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      searchForm: "",
    };
  },

  computed: {
    searchQuery() {
      return `&query=${this.searchForm}`;
    },
  },

  methods: {
    fetchMulti() {
      axios
        .get(
          `${store.multiURI}${store.apiKey}${this.searchQuery}${store.italianLang}`
        )
        .then((result) => {
          const resultArray = result.data.results;
          store.multiRequest = resultArray.filter(
            (result) => result.media_type != "person"
          );
          this.searchForm = "";

          console.log(store.multiRequest);
        });
    },

    getFlag(lang) {
      if (lang == "it") {
        return (lang = "https://flagsapi.com/IT/flat/32.png");
      } else if (lang == "en") {
        return (lang = "https://flagsapi.com/US/flat/32.png");
      } else if (lang == "de") {
        return (lang = "https://flagsapi.com/DE/flat/32.png");
      } else if (lang == "fr") {
        return (lang = "https://flagsapi.com/FR/flat/32.png");
      } else if (lang == "ja") {
        return (lang = "https://flagsapi.com/JP/flat/32.png");
      } else {
        return (lang = "https://flagsapi.com/ZW/flat/32.png");
      }
    },

    getPosterPath(query) {
      return `${store.imageURI}${query}`;
    },
  },
};
</script>

<template>
  <div class="search-form">
    <input v-model="searchForm" type="text" placeholder="Search movie" />
    <button @click="fetchMulti()">Cerca</button>
  </div>
  <div class="lists-result">
    <ul v-for="item in store.multiRequest">
      <li v-if="item.media_type == 'movie'">{{ "Titolo: " + item.title }}</li>
      <li v-else>{{ "Titolo: " + item.name }}</li>
      <li v-if="item.media_type == 'movie'">
        {{ "Titolo originale: " + item.original_title }}
      </li>
      <li v-else>{{ "Titolo originale: " + item.original_name }}</li>
      <li>
        <img
          :src="getFlag(item.original_language)"
          alt="flag"
          class="flag-image"
        />
        {{ "Lingua originale: " + item.original_language }}
      </li>
      <li>{{ "Valutazione: " + item.vote_average }}</li>
      <li>
        <img :src="getPosterPath(item.poster_path)" alt="immagine" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
