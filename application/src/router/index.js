import Vue from 'vue'
import Router from 'vue-router'

import authRoutes from '@/router/routes/authentication'
import mainRoutes from '@/router/routes/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    authRoutes,
    mainRoutes,
    {
      path: '*',
      redirect: '/sign_in'
    }
  ]
})
