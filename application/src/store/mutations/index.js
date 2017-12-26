export default {
  TOGGLE_LOADING (state, value) {
    state.showLoading = value
  },
  AUTH (state, payload) {
    state.isAuthorized = payload
  }
}
