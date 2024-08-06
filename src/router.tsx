import { AuthLayout } from "./layouts/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import {HomeLayout} from "./layouts/HomeLayout";
import {Auth} from "./utils/auth";
import {LogOutPage} from "./layouts/LogOutPage";
import {PostLayout} from "./layouts/PostLayout";
import {CreatePostLayout} from "./layouts/CreatePost";
import {AllPostsLayout} from "./layouts/AllPostsLayout";
import {ChangePassword} from "./layouts/ChangePassword";
import {GalleryLayout} from "./layouts/GalleryLayout.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/login",
        element: <Auth allowedRoles={[null]} page={<AuthLayout/>} errorPage={"/logout"}/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/logout",
        element: <Auth allowedRoles={['admin','user']} page={<LogOutPage/>} errorPage={"/"}/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/wpisy",
        element: <AllPostsLayout/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/wpisy/:title",
        element: <PostLayout />,
        errorElement: <HomeLayout/>
    },
    {
        path: "/wpisy/nowy",
        element: <Auth allowedRoles={['admin']} page={<CreatePostLayout />} errorPage={"/"}/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/zmień-hasło",
        element: <Auth allowedRoles={['admin','user']} page={<ChangePassword />} errorPage={"/"}/>,
        errorElement: <HomeLayout/>
    },
    {
        path: "/galeria",
        element: <Auth allowedRoles={['admin']} page={<GalleryLayout />} errorPage={"/"}/>,
        errorElement: <HomeLayout/>
    },
],
    {basename: '/'});