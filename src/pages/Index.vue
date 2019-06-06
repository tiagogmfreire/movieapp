<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    index
    {{movies}}
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    movies () {
      return this.$store.state.movies.movies
    }
  },
  mounted () {
    this.$store.dispatch('movies/upcoming')
    console.log('movies', this.$store.state.movies.movies)
  }
}

import axios from 'axios'

axios('http://localhost/movie/upcoming', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
  .then(function (response) {
    // console.log(response)
  })
  .catch(function (response) {
    // console.log(response)
  })

</script>
