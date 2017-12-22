import Router from 'vue-router'
import AuthenticationRoutes from './routes/authentication'
import MainRoutes from './routes/main'

export default new Router({
  mode: 'history',
  routes: [
    AuthenticationRoutes,
    MainRoutes,
    {
      path: '*',
      redirect: '/sign_in'
    }
  ]
})
