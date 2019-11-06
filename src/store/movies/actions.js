import axios from 'axios'

export function upcoming (state) {
  axios(process.env.API + '/movie/upcoming', {
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
  axios(process.env.API + '/movie/' + id, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      state.commit('setMovieDetails', response.data)
    })
    .catch(function (response) {
      // console.log(response)
    })
}

export function search (state, title) {
  console.log(title)
  axios(process.env.API + '/movie/search?title=' + title, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      state.commit('setMovieResults', response.data)
    })
    .catch(function (response) {
      // console.log(response)
    })
}
