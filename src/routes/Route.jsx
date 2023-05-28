import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MenuMain from "../pages/menuPage/MenuMain";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashPage/UserDash/MyCart";

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/menu',
            element: <MenuMain></MenuMain>
        },
        {
            path: '/order/:category',
            element: <Order></Order>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
       ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default router;