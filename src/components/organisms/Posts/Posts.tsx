import {useEffect, useState} from "react";
import {PostInfo} from "../../../types/posts/posts";
import {getPosts} from "../../../api/posts/posts";
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";

import './posts.css'
import {sort} from "../../../utils/sort";

export const Posts = () => {

    const [posts, setPosts] = useState<PostInfo[]|null>(null);

    let ignore = false;
    useEffect(()=> {
        if(!ignore) {
            (async () => {
                const posts = await getPosts()
                const sorted = sort(posts, 'ASC');

                setPosts(sorted);
            })()
        }
        return () => {ignore = true}
    },[])

    const postsElement = posts?.slice(0, 5).map(e =>
        <PostInfoSquare
            key={e.id}
            id={e.id}
            title={e.title}
            category={e.category}
            description={e.description}
            author={e.author}
            createTime={e.createTime}
            imgUrl={e.imgUrl}
        />)

    return(
        <>
            <div className='posts'>
                {posts ? postsElement : null}
            </div>
        </>
    )
}