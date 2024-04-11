import {Fetch} from "../../utils/fetch";
import {CreatePost, Post, PostInfo} from "../../types/posts/posts";

export const getPosts = async ():Promise<PostInfo[]|null> => {

    const res = await Fetch('/posts');
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const getPost = async (title:string):Promise<Post|null> => {

    const res = await Fetch(`/posts/${title}`);
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const createPost = async (post:CreatePost):Promise<Post|null> => {

    const res = await Fetch(`/posts`,'POST',post);
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const editPost = async (title:string,post:CreatePost):Promise<Post|null> => {

    const res = await Fetch(`/posts/${title}`,'PATCH',post);
    const response = !res.isSuccess ? null : res.body;

    return response;
}

export const deletePost = async (id:string):Promise<Post|null> => {

    const res = await Fetch(`/posts/${id}`,'DELETE');
    const response = !res.isSuccess ? null : res.body;

    return response;
}