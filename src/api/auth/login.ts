import {UserLogin} from "../../types/user/user";
import {Fetch} from "../../utils/fetch";

export const login = async ({email,pwd}:UserLogin) => {

    const response = await Fetch('/auth/login','POST',{email,pwd});

    //ERRORS
    return response;
}