import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {deletePost, getPost} from "../../../api/posts/posts";
import {Post} from "../../../types/posts/posts";
import {dataConvert} from "../../../utils/dataConvert";
import {useAuth} from "../../../hooks/useAuth";
import {Button} from "../../atoms/button";
import {usePopUp} from "../../../hooks/usePopUp";
import {useNavigate} from 'react-router-dom'

export const PostPage = () => {

    const [post, setPost] = useState<Post|null>(null);

    const { title } = useParams()
    const {auth} = useAuth()
    const navigate = useNavigate();
    const {printMessage} = usePopUp()

    useEffect(()=>{(async ()=>{
        setPost(await getPost(title))
    })()},[])

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

    return (
        <>
            <h1>{post.title}</h1>
            {auth?.role === 'admin' ?
                <div className="buttons">
                    <Link to={`/wpisy/nowy/?edit=${post.title}`}><Button text={'edit'}/></Link>
                    <Button text={'delete'} onClick={deleteHandler}/>
                </div> :
                null
            }
            <p>{post.author} / { dataConvert( post.createTime ) }</p>
            <p>{post.description}</p>
            <br/><br/>
            <div className="content" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </>
    )
}