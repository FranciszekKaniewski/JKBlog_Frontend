import {Fetch} from "../../utils/fetch";
import {PostInfo} from "../../types/posts/posts";

export const getPosts = async ():Promise<PostInfo[]|null> => {

    const res = await Fetch('/posts');
    const response = !res.isSuccess ? null : res.body;

    return response;
}