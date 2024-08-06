import {Fetch} from "../../utils/fetch";
import {CreatePostType, Post, PostInfo} from "../../types/posts/posts";
import {config} from "../../config";

export const getPosts = async ():Promise<PostInfo[]|null> => {

    const res = await Fetch('/posts');
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const getPost = async (title:string):Promise<Post|null> => {

    const res = await Fetch(`/posts/${title}`);
    if(!res.isSuccess) console.log(res)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const createPost = async (post:CreatePostType):Promise<{isSuccess:boolean,body:string|Post}> => (
    await Fetch(`/posts`,'POST',post)
)

export const editPost = async (title:string,post:CreatePostType):Promise<{isSuccess:boolean,body:string|Post}> =>(
    await Fetch(`/posts/${title}`,'PATCH',post)
)

export const deletePost = async (id:string):Promise<{isSuccess:boolean,body:string|Post}> => (
    await Fetch(`/posts/${id}`,'DELETE')
)

export const getPostByCat = async (category:string):Promise<{isSuccess:boolean,body:PostInfo[]}> => (
    await Fetch(`/posts/category/${category}`,'GET')
)

export const uploadImg = async (file:any):Promise<{isSuccess:boolean,body:string}> => {

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${config.backendURL}/img`,{
        method: "POST",
        credentials: 'include',
        body: formData,
    })
    const resBody = await res.json()
    return res.status === 201 || res.status === 200 ?
        {isSuccess: true, body: resBody}
        :
        {isSuccess: false, body: resBody.message};
}

export const getImgsNames = async ():Promise<{isSuccess:boolean,body:string[]}> => (
    await Fetch(`/img`,'GET')
)

export const deleteImg = async (fileName:string):Promise<{isSuccess:boolean,body:string}> => (
    await Fetch(`/img/${fileName}`,'DELETE')
)