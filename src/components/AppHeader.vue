<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },

  emits: ["perform-search"],
};
</script>
<template>
  <header>
    <div class="container">
      <div class="logo">BOOLFLIX</div>
      <div class="search-bar d-flex">
        <input
          v-model="searchText"
          type="text"
          placeholder="Search movie"
          class="form-control"
        />
        <button
          @click="$emit('perform-search', searchText)"
          class="btn btn-danger"
        >
          Cerca
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: black;
  color: white;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 2rem;
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
