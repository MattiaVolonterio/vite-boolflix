import { reactive } from "vue";

export const store = reactive({
  movieURI: "https://api.themoviedb.org/3/search/movie",
  movieTrendingURI: "https://api.themoviedb.org/3/trending/movie/day",
  seriesURI: "https://api.themoviedb.org/3/search/tv",
  seriesTrendingURI: "https://api.themoviedb.org/3/trending/tv/day",
  multiURI: "https://api.themoviedb.org/3/search/multi",
  apiKey: "?api_key=379781a4fe3768d4286069a61fcb5b6e",
  italianLang: "&language=it-IT",
  imageURI: "https://image.tmdb.org/t/p/w342",
  filmArray: [],
  seriesArray: [],
  filterSelection: "HOME",
  isTrending: true,
});
