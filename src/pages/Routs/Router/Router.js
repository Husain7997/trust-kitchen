
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import Main from '../../Layout/Main/Main';
import Services from '../../Services/Services/Services';
import AddService from '../../Services/AddService/AddService';
import MyReview from '../../Services/Review/MyReview';
import Blogs from '../../Blogs/Blogs';
import NotFound from '../../NotFound/NotFound';
import Login from '../../Sheard/Login/Login';
import Register from '../../Sheard/Register/Register';
import ServiceDetails from '../../Services/ServiceDetails/ServiceDetails';
import Review from '../../Services/Review/Review';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: fetch => (`http://localhost:5000/`)
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]

    }
])
export default router;