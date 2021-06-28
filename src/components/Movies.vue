<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-md-3"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <div class="m-3 shodow-lg">
          <div class="image-div">
            <img
              loading="lazy"
              class="image_poster"
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              alt="Card image cap"
            />
            <div class="movie-title">
              <p class="title mb-0">{{ movie.title }}</p>
              <p class="year" >{{ movie.release_date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: ["movies"],
};
</script>

<style  scoped>
img {
  width: 100%;
  height: 50%;
}
.image-div {
  position: relative;
}
.image_poster {
  border-radius: 8px;
}
.image-div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 2) 109%
  );
  z-index: 1;
}
.movie-title {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 10px;
  z-index: 2;
  font-size: 16px;
}
</style>