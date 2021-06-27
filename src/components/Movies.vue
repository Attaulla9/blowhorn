<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-md-3"
        v-for="(movie, index) in movies.Search"
        :key="index"
      >
        <div class="card m-3 shodow-lg">
          <div v-if="movie.Poster == 'N/A'">
            <img
              class="card-img-top"
              src="https://dummyimage.com/296x420/c9c9c9/fff.jpg&text=No+Image"
              alt="Card image cap"
            />
          </div>
          <div v-else>
            <img
              class="card-img-top"
              :src="movie.Poster"
              alt="Card image cap"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ movie.Title }}</h5>
            <p>{{ movie.Year }}</p>
            <!-- <div class="card-text">
              <p>{{ movie.Type }}</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("get_moviews");
  },
};
</script>

<style>
img {
  width: 100%;
  height: 50%;
}
/* .card-title{
  position: absulute;
} */
</style>