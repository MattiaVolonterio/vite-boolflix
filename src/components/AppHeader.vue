<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },

  emits: ["perform-search"],

  methods: {
    performSearch() {
      if (this.searchText) {
        this.$emit("perform-search", this.searchText);
        this.searchText = "";
      }
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h1 class="logo">BOOLFLIX</h1>
      <div class="search-bar d-flex">
        <input
          v-model="searchText"
          @keyup.enter="performSearch()"
          type="text"
          placeholder="Search movie"
          class="form-control"
        />
        <button @click="performSearch()" class="btn btn-danger">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  height: $header-height;
  background-color: black;
  color: white;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 2rem;
      margin-bottom: 0;
      font-weight: bolder;
      color: red;
    }

    .search-bar {
      max-width: 50%;
      flex-grow: 1;
    }
  }
}
</style>
