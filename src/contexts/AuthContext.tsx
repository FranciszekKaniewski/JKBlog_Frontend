import {createContext, useState} from "react";
import {UserInfoType} from "../types/user/user";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState<UserInfoType|null>(null);

    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};