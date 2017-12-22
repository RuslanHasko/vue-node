import Authentication from 'components/Authentication/Authentication'
import SignIn from 'components/Authentication/SignIn'
import SignUp from 'components/Authentication/SignUp'
import RestoreAccess from 'components/Authentication/RestoreAccess'

export default {
  path: '/',
  component: Authentication,
  children: [
    {
      path: 'sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: 'sign_up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: 'restore_access',
      name: 'RestoreAccess',
      component: RestoreAccess
    }
  ]
}
