import {Fetch} from "../../utils/fetch";
import {CreatePost, Post, PostInfo} from "../../types/posts/posts";

export const getPosts = async ():Promise<PostInfo[]|null> => {

    const res = await Fetch('/posts');
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const getPost = async (title:string):Promise<Post|null> => {

    const res = await Fetch(`/posts/${title}`);
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const createPost = async (post:CreatePost):Promise<Post|null> => {

    const res = await Fetch(`/posts`,'POST',post);
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const editPost = async (title:string,post:CreatePost):Promise<Post|null> => {

    const res = await Fetch(`/posts/${title}`,'PATCH',post);
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const deletePost = async (id:string):Promise<Post|null> => {

    const res = await Fetch(`/posts/${id}`,'DELETE');
    if(!res.isSuccess) console.log(res.body)
    const response = !res.isSuccess ? null : res.body;

    return response;
}