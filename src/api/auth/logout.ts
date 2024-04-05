import {Fetch} from "../../utils/fetch";

export const logout = async () => {

    const response = await Fetch('/auth/logout','POST');

    //ERRORS
    return response;
}