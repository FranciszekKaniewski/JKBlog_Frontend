import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {deletePost, getPost} from "../../../api/posts/posts";
import {Post} from "../../../types/posts/posts";
import {dataConvert} from "../../../utils/dataConvert";
import {useAuth} from "../../../hooks/useAuth";
import {usePopUp} from "../../../hooks/usePopUp";
import {useNavigate} from 'react-router-dom'
import {PostMain} from "../../organisms/PostMain/PostMain";
import {PostHeader} from "../../organisms/PostHeader/PostHeader";
import {PostComments} from "../../organisms/PostComments/PostComments";


export const PostPage = () => {

    const [post, setPost] = useState<Post|null>(null);
    const [loading, setLoading] = useState(false);

    const { title } = useParams()
    const {auth} = useAuth()
    const navigate = useNavigate();
    const {printMessage} = usePopUp()

    let ignore = false;
    useEffect(()=>{(async ()=>{
        if(!ignore) {
            setLoading(true)
            setPost(await getPost(title))
            setLoading(false)
        }
        return () => { ignore = true }
    })()},[title])

    const deleteHandler = async () => {
        const bool = window.confirm(`Czy na pewno chcesz usunąć wpis ${title}`)
        if(!post || !bool) return;

        const res = await deletePost(post.id)

        if(res.isSuccess){
            navigate('/wpisy');
            printMessage({text: `Wpis ${title} usunięty poprawnie`, type: "SUCCESS"} );
        }else{
            printMessage( {text:(res.body as string), type:"ERROR"} );
        }
    }

    if(!post) return <h1>loading...</h1>

    if(loading) return <h1>Loading</h1>
    return (
        <>
            <PostHeader
                role={auth?.role}
                title={post.title}
                author={post.author}
                date={dataConvert(post.createTime)}
                description={post.description}
                deleteHandler={deleteHandler}
            />
            <PostMain title={post.title} content={post.content} category={post.category}/>
            <PostComments id={post.id}/>
        </>
    )
}