import SignIn from '../views/authentication/signin';
import SignUp from '../views/authentication/signup';

var authRoutes = [
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp }
]

export default authRoutes;