import {Button} from "../components/atoms/button";
import {logout} from "../api/auth/logout";

export const LogOutPage = () => {

    return ( <Button text={"LogOut"} onClick={logout}/>)
}