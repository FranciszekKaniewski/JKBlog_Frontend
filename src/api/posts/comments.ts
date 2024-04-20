import {Fetch} from "../../utils/fetch";

export const getComments = async (id:string):Promise<{isSuccess:boolean,body:string|any}> => (
    await Fetch(`/comments/all/${id}`)
)
export const editComment = async (id:string, content: string):Promise<{isSuccess:boolean,body:string|any}> => {
    console.log(content)
    return await Fetch(`/comments/${id}`, 'PATCH', {content})
}
export const deleteComment = async (id:string):Promise<{isSuccess:boolean,body:string|any}> => (
    await Fetch(`/comments/${id}`,'DELETE')
)
export const postComment = async (id:string, content: string):Promise<{isSuccess:boolean,body:string|any}> => (
    await Fetch(`/comments/${id}`,'POST', {content})
)