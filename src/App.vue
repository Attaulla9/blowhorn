<template>
  <div id="app">
    <Navbar />
    <div class="text-center container" id="searchinput">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Movie name"
          aria-label="Movie name"
          v-model="search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="searchresult" type="button">
            Search
          </button>
        </div>
      </div>
      <div>
        <select class="form-control" @click="sorting">
          <option value="" disabled selected>Sort</option>
          <option value="desc">Alphabetically</option>
        </select>
      </div>
    </div>
    <router-view></router-view>
    <Movies :movies="movies" />
    <div class="d-flex justify-content-center my-2">
      <button class="btn btn-primary" @click="pagination">Load More</button>
    </div>
  </div>
</template>

<script>
import Movies from "./components/Movies.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Movies,
    Navbar,

  },
  data() {
    return {
      page: 1,
      search: "",
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    getMoview(e) {
      return console.log(e);
    },
    searchitem() {
      return this.$store.getters.movies;
    },
  },
  mounted() {
    this.$store.dispatch("get_moviews", this.page);
  },
  methods: {
    pagination() {
      this.$store.dispatch("get_moviews", this.page++);
    },
    sorting() {
      this.$store.dispatch("sortbyTitle");
      return this.$store.getters.movies;
    },
    searchresult(){
      this.$store.dispatch("searchMoview",this.search);
      // this.$router.push({name:'Search', params: {s: 'search'}}); 
    }
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-family: "Ubuntu", sans-serif;
}
#searchinput {
  display: flex;
  justify-content: center;
  gap: 10px;
  min-width: 50%;
}
</style>
