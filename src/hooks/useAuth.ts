import {useContext, useEffect} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {Fetch} from "../utils/fetch";

export const useAuth = () => {

    const {auth, setAuth} = useContext(AuthContext);

    useEffect(()=>{
        (async()=>{

            const res = await Fetch('/users');
            !res.isSuccess ? setAuth(null) : setAuth(res.body);

        })()
    },[auth?.role,auth?.name])

    return useContext(AuthContext);
}