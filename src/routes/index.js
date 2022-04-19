import Home from '../page/home/index'
import Detail from '../page/detail/index'
import Admin from '../page/admin'
import Login from '../page/login'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detail',
        exact: false,
        main: () => <Detail />
    },
    {
        path: '/admin-website',
        exact: false,
        main: () => <Admin />
    }
    ,
    {
        path: '/admin-login',
        exact: false,
        main: () => <Login />
    }
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
]

export default routes