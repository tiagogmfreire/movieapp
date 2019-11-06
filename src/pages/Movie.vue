<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <h4>{{movie.title}}</h4>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <img v-bind:src="movie.poster_path" witdh="300" height="450" >
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <strong>Overview:</strong><br/>
          {{movie.overview}}
        </div>
        <div class="col">
          <strong>Genre:</strong><br/>
          <div class="text-subtitle3" v-for="(genre,j) in movie.genres" v-bind:key="`${j}-${genre}`">{{genre.name}}</div>
        </div>
        <div class="col">
          <strong>Release date:</strong><br/>
          {{movie.release_date}}
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    movie () {
      return this.$store.state.movies.movie
    }
  },
  mounted () {
    this.$store.dispatch('movies/details', this.$route.params.id)
  }
}

</script>
