import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/index'
import mutations from './mutations/index'
// import getters from './getters/index'

Vue.use(Vuex)

export function getInitialState () {
  return {
    currentUserId: '',
    isAuthorized: false,
    showLoading: false
  }
}

const store = new Vuex.Store({
  state: getInitialState(),
  actions,
  mutations
})

export default store
