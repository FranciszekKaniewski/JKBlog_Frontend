import { AuthLayout } from "./AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import {MainPage} from "./MainPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <h1>Brak strony</h1>
    },
    {
        path: "/login",
        element: <AuthLayout/>,
    },
]);