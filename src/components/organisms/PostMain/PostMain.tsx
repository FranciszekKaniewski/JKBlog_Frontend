import 'react-quill/dist/quill.snow.css';
import './post-main.css'
import {PostInfoSquare} from "../../molecules/PostInfoSquare/PostInfoSquare";
import {useState} from "react";
import {PostInfo} from "../../../types/posts/posts";

export const PostMain = ({content,category}) => {
    const [pomotePosts, setPomotePosts] = useState<PostInfo[]|null>([
        {id: '123',
        title: "TITLE",
        category: 'CAT',
        description: 'DESC',
        author: 'TEST',
        createTime: new Date('20-11-99')},
        {id: '333',
            title: "TITLE",
            category: 'CAT',
            description: 'DESC',
            author: 'TEST',
            createTime: new Date('20-11-99')},
        {id: '444',
            title: "TITLE",
            category: 'CAT',
            description: 'DESC',
            author: 'TEST',
            createTime: new Date('20-11-99')},
        ]);

    const posts = pomotePosts?.slice(0,3).map(e => <PostInfoSquare id={e.id} title={e.title} category={e.category} description={e.description} author={e.author} createTime={e.createTime}/>)

    return(
        <main className='post-main'>
            <div className="content view ql-editor" dangerouslySetInnerHTML={{__html: content}}></div>
            <div className="right-posts">
                <h3>Inne z kategori: {category}</h3>
                {posts}
            </div>
        </main>
    )
}
