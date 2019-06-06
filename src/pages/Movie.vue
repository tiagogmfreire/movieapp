<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    movie
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}

import axios from 'axios'

axios('http://localhost/movie/299534', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  })
</script>
