import axios, { post } from 'axios'
import store from '../store'
import { BASE_URL } from 'shared/constants'

/* Axios config */
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = false
axios.timeout = 10000 // 20 seconds as maximum request time

/* Global error handler */
axios.interceptors.response.use(null, error => {
  store.commit('TOGGLE_LOADING', false)
  console.log(error)
})

export default {
  SignUp ({ commit }, payload) {
    console.log(payload)
    store.commit('TOGGLE_LOADING', true)
    return post('/api/v1/signup', payload)
      .then(response => Promise.resolve(response.data))
      .catch(error => console.log(error))
  },
  SignIn ({ commit }, payload) {
    console.log(payload)
    store.commit('TOGGLE_LOADING', true)
    return post('/api/v1/auth/', payload)
      .then(response => Promise.resolve(response.data))
      .catch(error => console.log(error))
  }
}
