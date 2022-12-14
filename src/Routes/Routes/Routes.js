import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFund/NotFound';
import Profile from '../../Pages/Profile/Profile';
import Register from '../../Pages/Register/Register';
import SingUp from '../../Pages/SingUp/SingUp';
import Category from '../../Pages/UsedCars/Category/Category';
import UsedCars from '../../Pages/UsedCars/UsedCars';
import MyReviews from './../../Pages/MyRivew/MyReviews';
import Reviews from './../../Pages/MyRivew/Reviews/Reviews';
import DashBoardLayout from './../../Pages/DashBoard/DashBoardLayout/DashBoardLayout';
import AllUsers from '../../Pages/DashBoard/AllUsers/AllUsers';
import AllSeller from '../../Pages/DashBoard/AllSeller/AllSeller';
import AllBuyers from '../../Pages/DashBoard/AllBuyers/AllBuyers';
import ReportedProduct from '../../Pages/DashBoard/ReportedProduct/ReportedProduct';
import AllProduct from './../../Pages/DashBoard/AllProduct/AllProduct';
import MyOrders from '../../Pages/DashBoard/MyOrders/MyOrders';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/usedcar',
                element: <UsedCars></UsedCars>
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/review',
                element: <Reviews></Reviews>
            },
            {
                path: '/dashboard',
                element: <DashBoardLayout></DashBoardLayout>,
                children: [
                    {
                        path: '/dashboard/allusers',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: '/dashboard',
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: '/dashboard/allseller',
                        element: <AllSeller></AllSeller>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers></AllBuyers>
                    },
                    {
                        path: '/dashboard/allproduct',
                        element: <AllProduct></AllProduct>
                    },
                    {
                        path: '/dashboard/reportedproduct',
                        element: <ReportedProduct></ReportedProduct>
                    },
                ]
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>,
                children:  [
                    {
                        path: '/register/',
                        element: <Login></Login>
                    },
                    {
                        path: '/register/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/register/singup',
                        element: <SingUp></SingUp>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])