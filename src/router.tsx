import { AuthLayout } from "./layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import {HomeLayout} from "./layouts/HomeLayout";
import {Auth} from "./utils/auth";
import {LogOutPage} from "./layouts/LogOutPage";
import {PostLayout} from "./layouts/PostLayout";
import {CreatePostLayout} from "./layouts/CreatePost";
import {AllPostsLayout} from "./layouts/AllPostsLayout";
import {ChangePassword} from "./layouts/ChangePassword";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/login",
        element: <Auth allowedRoles={[null]} page={<AuthLayout/>} errorPage={"/logout"}/>,
    },
    {
        path: "/logout",
        element: <Auth allowedRoles={['admin','user']} page={<LogOutPage/>} errorPage={"/"}/>,
    },
    {
        path: "/wpisy",
        element: <AllPostsLayout/>,
    },
    {
        path: "/wpisy/:title",
        element: <PostLayout />,
    },
    {
        path: "/wpisy/nowy",
        element: <Auth allowedRoles={['admin']} page={<CreatePostLayout />} errorPage={"/"}/>,
    },
    {
        path: "/zmień-hasło",
        element: <Auth allowedRoles={['admin','user']} page={<ChangePassword />} errorPage={"/"}/>,
    },
]);