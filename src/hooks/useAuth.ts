import {useContext, useEffect} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {Fetch} from "../utils/fetch";

export const useAuth = () => {

    const {auth, setAuth} = useContext(AuthContext);

    let ignore = false;
    useEffect(()=>{
        if (!ignore) {
            (async () => {

                const res = await Fetch('/users');
                !res.isSuccess ? setAuth({role: null, username: null}) : setAuth(res.body);

            })()
        }
        return () => { ignore = true }
    },[auth?.role,auth?.username])

    return useContext(AuthContext);
}