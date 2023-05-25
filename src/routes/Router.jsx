import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";


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
                path:"/shop",
                element:<OurShop></OurShop>
            },
        ]
    },
]);
export default router