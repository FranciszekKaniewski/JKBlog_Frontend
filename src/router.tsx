import { AuthLayout } from "./layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import {HomeLayout} from "./layouts/HomeLayout";
import {Auth} from "./utils/auth";
import {LogOutPage} from "./layouts/LogOutPage";
import {PostLayout} from "./layouts/PostLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/login",
        element: <Auth allowedRoles={[null]} page={<AuthLayout/>} errorPage={"/"}/>,
    },
    {
        path: "/logout",
        element: <Auth allowedRoles={['admin','user']} page={<LogOutPage/>} errorPage={"/"}/>,
    },
    {
        path: "/post",
        element: <PostLayout />,
    },
]);