import 'react-quill/dist/quill.snow.css';
import './post-main.css'
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";
import {useEffect, useState} from "react";
import {PostInfo} from "../../../types/posts/posts";
import {getPostByCat} from "../../../api/posts/posts";

type Props = {
    title: string;
    content: string;
    category: string;
}

export const PostMain = ({title,content,category}:Props) => {
    const [promotePosts, setPromotePosts] = useState<PostInfo[]|null>(null);

    let ignore = false;
    useEffect(() => {
        if (!ignore) {
            (async () => {
                const res = await getPostByCat(category);
                if (res.isSuccess) {
                    setPromotePosts(res.body);
                }
            })()
        }
        return () => { ignore = true }
    }, []);


    const posts = promotePosts?.slice(0,3).filter(e => e.title != title).map(e => <PostInfoSquare key={e.id} id={e.id} title={e.title} category={e.category} description={e.description} author={e.author} createTime={e.createTime} imgUrl={e.imgUrl}/>)

    return(
        <main className='post-main'>
            <div className="content view ql-editor" dangerouslySetInnerHTML={{__html: content}}></div>
            <div className="right-posts">
                <h3>Inne z kategori: {category}</h3>
                {!posts ? <h1>Loading...</h1> : posts.length ? posts : <h1>Brak</h1>}
            </div>
        </main>
    )
}
