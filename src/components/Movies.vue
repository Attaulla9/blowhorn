<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-md-3"
        v-for="(movie, index) in movies.results"
        :key="index"
      >
        <!-- {{movie}} -->
        <div class="card m-3 shodow-lg">
          <!-- <div v-if="movie.Poster == 'N/A'">
            <img
              class="card-img-top"
              src="https://dummyimage.com/296x420/c9c9c9/fff.jpg&text=No+Image"
              alt="Card image cap"
            />
          </div> -->
          <div class="image-div">
            <img
              loading="lazy"
              class="card-img rounded "
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              alt="Card image cap"
            />
            <p class="card-title movie-title">{{ movie.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="pagination">Load More</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"],
  data() {
    return {
      page: 1,
    };
  },
  mounted() {
    this.$store.dispatch("get_moviews", this.page);
  },
  methods: {
    pagination() {
      this.page++;
    },
  },
};
</script>

<style>
img {
  width: 100%;
  height: 50%;
}
.image-div{
  position: relative;
}
.image-div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 1;
}
.movie-title  {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 10px;
    z-index: 2;
    font-size: 16px;
  }

</style>