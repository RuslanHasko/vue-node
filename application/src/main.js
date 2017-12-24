import 'node_modules/vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store/store'
import filters from './shared/filters'

import lodashGet from 'lodash.get'

sync(store, router)
Vue.use(Router)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* Injecting lodash get as global method */
Vue.mixin({
  methods: {
    get (path, def) {
      return lodashGet(this, path, def)
    }
  }
})

/* Initializing filters */
for (const filter in filters) {
  Vue.filter(filter, filters[filter])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
