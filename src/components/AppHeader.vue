<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      searchText: "",
      selections: ["HOME", "FILM", "SERIE"],
      currentSelectionIndex: 0,
      currentSelection: "HOME",
    };
  },

  emits: ["perform-search"],

  methods: {
    performSearch() {
      if (this.searchText) {
        store.isTrending = false;
        this.$emit("perform-search", this.searchText);
      }
    },

    changeSelected(index, selection) {
      this.currentSelectionIndex = index;
      this.currentSelection = selection;
      store.filterSelection = this.currentSelection;
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h1 class="logo">BOOLFLIX</h1>

      <div class="filter-selection">
        <ul v-for="(selection, index) in selections">
          <li
            :class="currentSelectionIndex == index ? 'active' : ''"
            @click="changeSelected(index, selection)"
          >
            {{ selection }}
          </li>
        </ul>
      </div>

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

    .filter-selection {
      display: flex;
      align-items: center;

      ul {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;

        .active {
          color: red;
        }

        li {
          list-style: none;
          cursor: pointer;
        }
      }
    }

    .search-bar {
      max-width: 50%;
      flex-grow: 1;
    }
  }
}
</style>
