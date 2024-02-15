<script>
import { store } from "../store";

export default {
  data() {
    return {};
  },
  props: { object: Object },
  methods: {
    getPosterPath(query) {
      if (query) {
        return `${store.imageURI}${query}`;
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
      }
    },
    setRating(rating) {
      const starRating = Math.round(rating / 2);
      return starRating;
    },
    getFlag(lang) {
      if (lang == "it") return (lang = "https://flagsapi.com/IT/flat/32.png");
      if (lang == "en") return (lang = "https://flagsapi.com/US/flat/32.png");
      if (lang == "de") return (lang = "https://flagsapi.com/DE/flat/32.png");
      if (lang == "fr") return (lang = "https://flagsapi.com/FR/flat/32.png");
      if (lang == "ja") return (lang = "https://flagsapi.com/JP/flat/32.png");
      return (lang = "https://flagsapi.com/ZW/flat/32.png");
    },
  },
};
</script>
<template>
  <div class="card-component">
    <div class="top-card-container">
      <div class="card-front">
        <img
          :src="getPosterPath(object.posterPath)"
          alt="immagine"
          :class="object.posterPath ? '' : 'void-poster'"
        />
      </div>

      <div class="card-back">
        <div class="title-info">
          <span class="bold-text">Titolo: </span>
          <span>{{ object.title }}</span>
        </div>

        <div class="original-title-info">
          <span class="bold-text">Titolo originale: </span>
          <span>{{ object.originalTitle }}</span>
        </div>

        <div class="vote-info">
          <span class="bold-text">Voto: </span>
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= setRating(object.vote)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
        </div>

        <div class="lang-info">
          <span class="bold-text">Lingua originale: </span>
          <img
            :src="getFlag(object.language)"
            alt="flag"
            class="flag-image d-inline"
          />
        </div>

        <span class="bold-text">Overview: </span>
        <div class="overview-info">
          <p>{{ object.overview }}</p>
        </div>
      </div>
    </div>

    <div class="card-title">{{ object.title }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card-component {
  .top-card-container:hover {
    .card-front {
      display: none;
    }
    .card-back {
      display: block;
    }
  }
  .card-front,
  .card-back {
    height: 468px;
  }

  .card-back {
    display: none;
    padding: 1rem;
    background-color: black;
    color: white;

    .bold-text {
      font-size: 1.1rem;
      font-weight: bold;
    }

    .fa-star {
      color: rgb(255, 221, 0);
    }

    .overview-info {
      margin-top: 0.5rem;
      height: 250px;
      overflow: auto;
    }
  }
  img {
    max-width: 100%;
    height: 100%;
  }

  .card-title {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
}
</style>
