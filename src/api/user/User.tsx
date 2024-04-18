import {Fetch} from "../../utils/fetch";
import {UserEditType} from "../../types/user/user";

export const editUser = async (obj:UserEditType):Promise<{isSuccess:boolean,body:string|UserEditType}> =>(
    await Fetch(`/users`,'PATCH',obj)
)
export const changePassword = async (oldPassword:string,newPassword:string):Promise<{isSuccess:boolean,body:string}> => (
    await Fetch(`/users/password`,'PATCH',{oldPassword,newPassword})
)