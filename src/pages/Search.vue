<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-md">
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        @input="searchMovie"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="(movie, i) in results" v-bind:key="`${i}-${movie}`">
        <img v-bind:src="movie.poster_path" witdh="300" height="450">

        <q-card-section>
          <div class="text-h6">{{movie.title}}</div>
          <div class="text-subtitle2">{{movie.release_date}}</div>
          <div class="text-subtitle3" v-for="(genre,j) in movie.genres" v-bind:key="`${j}-${genre}`">{{genre.name}}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat clickable :to="`/movie/${movie.id}`">See more...</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    results () {
      return this.$store.state.movies.results
    }
  },
  mounted () {
    // this.$store.dispatch('movies/upcoming')
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchMovie (e) {
      console.log(e)
      this.$store.dispatch('movies/search', e)
    }
  }
}
</script>
