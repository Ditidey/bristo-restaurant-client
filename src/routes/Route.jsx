import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MenuMain from "../pages/menuPage/MenuMain";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashPage/UserDash/MyCart";
import ProtectedRoute from "./ProtectedRoute";
import AllUser from "../pages/dashPage/adminDash/AllUser";
import AddItem from "../pages/dashPage/adminDash/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashPage/adminDash/ManageItems";
import Payment from "../pages/dashPage/UserDash/Payment";
import UserHome from "../pages/dashPage/UserDash/UserHome";
import AdminHome from "../pages/dashPage/adminDash/AdminHome";

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
        element:    <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute> ,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
              path: 'payment',
              element: <Payment></Payment>
            },
            {
               path: 'userhome',
               element: <UserHome></UserHome>
            },
            {
               path: 'adminhome',
               element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'alluser',
                element:  <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'addItem',
                element:   <AdminRoute> <AddItem></AddItem> </AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
])

export default router;