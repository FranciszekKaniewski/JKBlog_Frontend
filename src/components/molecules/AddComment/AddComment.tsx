import {Button} from "../../atoms/button";
import "./add-coment.css"
import {useState} from "react";
import {postComment} from "../../../api/posts/comments";
import {usePopUp} from "../../../hooks/usePopUp";

export const AddComment = ({ id,add }) => {

    const [comment, setComment] = useState('');

    const {printMessage} = usePopUp()

    const submitHandler = async () => {
        const res = await postComment(id,comment);

        if(res.isSuccess){
            printMessage({text:"Komentarz dodany poprawnie.",type:'SUCCESS'})
            add(res.body)
            setComment('');
        }else{
            printMessage({text:res.body,type:'ERROR'})
        }
    }
    return(
        <from className='add-comment'>
            <h4>Dodaj komentarz:</h4>
            <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <Button text={'Wiślij'} onClick={submitHandler} />
        </from>
    )
}