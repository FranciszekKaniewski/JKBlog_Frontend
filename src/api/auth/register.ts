import {UserRegister} from "../../types/user/user";
import {Fetch} from "../../utils/fetch";


export const register = async ({username,email,name,surname,pwd}:UserRegister) => {

    const response = await Fetch('/users','POST',{username,email,name,surname,pwd});
    return response
}