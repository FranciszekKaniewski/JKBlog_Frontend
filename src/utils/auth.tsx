import {useAuth} from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import {Loading} from "../components/atoms/Loading/Loading";
import {Header} from "../components/organisms/header/Header";
import {Footer} from "../components/organisms/Footer/Footer";

export const Auth = ({ allowedRoles, page, errorPage }) => {
    //@ts-ignore
    const {auth} = useAuth();

    if(auth === null){
        return <><Header/><Loading/><Footer/></>
    }


    if(!allowedRoles.includes(auth ? auth.role : null)){
        return <Navigate to={errorPage} replace={true}/>
    }

    return page;
}