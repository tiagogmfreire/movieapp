import axios from 'axios'

export function upcoming (state) {
  axios('http://localhost/movie/upcoming', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      state.commit('setUpcomingMovies', response.data)
    })
    .catch(function (response) {
      // console.log(response)
    })
}

export function details (state, id) {
  axios('http://localhost/movie/upcoming', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      state.commit('setUpcomingMovies', response.data)
    })
    .catch(function (response) {
      // console.log(response)
    })

  console.log('movie/id', id)
}
