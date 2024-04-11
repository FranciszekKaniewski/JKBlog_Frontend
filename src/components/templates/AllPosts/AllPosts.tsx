import {useEffect, useState} from "react";
import {PostInfo} from "../../../types/posts/posts";
import {getPosts} from "../../../api/posts/posts";
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";
import {sort} from "../../../utils/sort";

import './all-posts.css'

export const AllPosts = () => {

    const [posts, setPosts] = useState<PostInfo[]|null>(null);
    const [sortType, setSortType] = useState("ASC");

    useEffect(()=> {
        (async()=>{
            const posts = await getPosts()
            const sorted = sort(posts,sortType);

            setPosts(sorted);
        })()
    },[sortType])

    if(!posts) return <h1>Loading...</h1>

    const postsElement = posts.map(e =>
        <PostInfoSquare
            key={e.id}
            id={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            author={e.author}
            createTime={e.createTime}
        />)

    return (
        <div className='all-posts'>
            {posts ? postsElement : null}
        </div>
    )
}