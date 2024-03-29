import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

export const MainPage = () => {
    const {user} = useContext(AuthContext)

    return (
        <>
            <h1>Witaj na stronie głównej {user.name} twoja rola to {user.role} </h1>
            {user.role=='admin' ? <h2>Tajne sprawy admina!</h2>:null}
        </>
    )
}