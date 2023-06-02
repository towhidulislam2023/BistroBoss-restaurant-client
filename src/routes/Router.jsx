import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Registar from "../pages/Registar/Registar";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../DashBoardPages/Cart/Cart";
import UserList from "../DashBoardPages/UserList/UserList";
import AddItems from "../DashBoardPages/AddItems/AddItems";
import ManageItem from "../DashBoardPages/ManageItems/ManageItem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<OurMenu></OurMenu>
            },
           
            {
                path:"/shop/:catagory",
                element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/registar",
        element:<Registar></Registar>,
    },
    {
        path:"/dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
        children:[
            {
                path:"/dashboard/cart",
                element: <Cart></Cart>
            },
            {
                path:"/dashboard/users",
                element:<UserList></UserList>
            },
            {
                path:"/dashboard/additems",
                element:<AddItems></AddItems>
            },
            {
                path:"/dashboard/manageitems",
                element:<ManageItem></ManageItem>
            },
        ]
    }
]);
export default router