<template>
  <div id="app">
    <Navbar />
     <div class="text-center w-50 m-auto">
      <select class="form-control" @click="sorting">
        <option value="" disabled selected>Sort</option>
        <option value="desc">Alphabetically</option>
      </select>
    </div>
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
    };
  },
  computed: {
    movies() {
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
      this.$store.dispatch("sortbyTitle",);
      return this.$store.getters.movies;
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-family: "Ubuntu", sans-serif;
}
</style>
