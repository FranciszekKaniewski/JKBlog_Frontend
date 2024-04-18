import {useAuth} from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Auth = ({ allowedRoles, page, errorPage }) => {
    const {auth} = useAuth();

    if(auth === null){
        return <h1>Loading...</h1>
    }


    if(!allowedRoles.includes(auth ? auth.role : null)){
        return <Navigate to={errorPage} replace={true}/>
    }

    return page;
}