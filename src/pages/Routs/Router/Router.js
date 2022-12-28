
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
import AddReview from '../../Services/Review/AddReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
              
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/servicedetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addreview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
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