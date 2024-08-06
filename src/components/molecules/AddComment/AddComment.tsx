import {Button} from "../../atoms/button";
import "./add-coment.css"
import {useState} from "react";
import {postComment} from "../../../api/posts/comments";
import {usePopUp} from "../../../hooks/usePopUp";
import {Loading} from "../../atoms/Loading/Loading";

type Props = {
    id: string;
    add: (body:any)=>void
}

export const AddComment = ({ id,add }:Props) => {

    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    const { printMessage } = usePopUp();

    const submitHandler = async () => {
        setLoading(true);
        const res = await postComment(id,comment);
        setLoading(false);

        if(res.isSuccess){
            printMessage({text:"Komentarz dodany poprawnie.",type:'SUCCESS'})
            add(res.body)
            setComment('');
        }else{
            printMessage({text:res.body,type:'ERROR'})
        }
    }

    if(loading) return <Loading />
    return(
        <form className='add-comment'>
            <h4>Dodaj komentarz:</h4>
            <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <Button text={'Wiślij'} onClick={submitHandler} />
        </form>
    )
}