import {useAuth} from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Auth = ({ allowedRoles, page, errorPage }) => {
    const {auth} = useAuth();

    if(!allowedRoles.includes(auth.role) && auth.role !== undefined){
        return <Navigate to={errorPage}/>
    }

    return page;
}