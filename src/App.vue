<template>
  <div id="app">
    <Navbar />
    <Movies :movies="this.$store.state.movies" />
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
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-family: "Ubuntu", sans-serif;
}
</style>
