import Home from '../page/home/index'
import Detail from '../page/detail/index'

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
    }
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
]

export default routes