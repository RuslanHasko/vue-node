import Router from 'vue-router'
import AuthenticationRoutes from './routes/authentication'
import MainRoutes from './routes/main'

let router = new Router({
  mode: 'history',
  routes: [
    AuthenticationRoutes,
    MainRoutes,
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.beforeEach(function ({ name }, from, next) {
  const token = localStorage.getItem('ToDoAppToken')
  console.log(from.name)
  if (name === 'SignIn' || name === 'SignUp') {
    if (token) {
      from.name === null ? next('/home') : next(false)
    } else {
      next()
    }
  } else {
    token ? next() : next('/sign_in')
  }
})

export default router
