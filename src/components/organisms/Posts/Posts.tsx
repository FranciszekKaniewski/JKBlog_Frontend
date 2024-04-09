import {useEffect, useState} from "react";
import {PostInfo} from "../../../types/posts/posts";
import {getPosts} from "../../../api/posts/posts";
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";

import './posts.css'

export const Posts = () => {

    const [posts, setPosts] = useState<PostInfo[]|null>(null);

    useEffect(()=> {
        (async()=>{
            const posts = await getPosts()
            const sorted = posts?.sort((a,b) => a.createTime > b.createTime ? -1 : 1);

            setPosts(sorted);
        })()
    },[])

    const postsElement = posts?.map(e =>
        <PostInfoSquare
            key={e.id}
            id={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            author={e.author}
            createTime={e.createTime}
        />)

    return(
        <>
            <div className='posts'>
                {posts ? postsElement : null}
            </div>
        </>
    )
}