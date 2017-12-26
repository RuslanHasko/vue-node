import axios, { post } from 'axios'
import store from '../store'
import { BASE_URL } from 'shared/constants'

/* Axios config */
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = false
axios.timeout = 10000 // 20 seconds as maximum request time

/* Global error handler */
axios.interceptors.response.use(response => {
  console.log(response)
  return response
}, error => {
  store.commit('AUTH', false)
  console.log(error)
  return Promise.reject(error)
})

export default {
  SignUp ({ commit }, payload) {
    return post('/api/v1/signup', payload)
      .then((response) => {
        let token = response.data.token
        localStorage.setItem('ToDoAppToken', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        commit('AUTH', true)
        Promise.resolve(response.data)
      })
      .catch(error => console.log(error))
  },
  SignIn ({ commit }, payload) {
    return post('/api/v1/auth/', payload)
      .then((response) => {
        let token = response.data.token
        localStorage.setItem('ToDoAppToken', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        commit('AUTH', true)
        Promise.resolve(response.data)
      })
      .catch(error => console.log(error))
  }
}
