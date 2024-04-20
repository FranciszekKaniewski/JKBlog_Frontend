
import './comment.css'
import {dataConvert} from "../../../utils/dataConvert";
import {useAuth} from "../../../hooks/useAuth";
import {Button} from "../../atoms/button";
import {useState} from "react";
import {deleteComment, editComment} from "../../../api/posts/comments";
import {usePopUp} from "../../../hooks/usePopUp";

type Props = {
    id: string;
    username: string;
    name?: string;
    surname?: string;
    role: string;
    createTime: Date;
    content: string;
}
export const Comment = ({id,username,name,surname,role,createTime,content,remove,update}:Props) => {

    const [edit, setEdit] = useState(false);
    const [comment, setComment] = useState(content);

    const { auth } = useAuth();
    const {printMessage} = usePopUp();

    const editHandle = () => {
        setEdit(prevState => !prevState)
    }
    const deleteHandle = async () => {
        if(!confirm("Czy napewno chcesz usunąć komentarz?")) return
        const res = await deleteComment(id);

        if(res.isSuccess) {
            printMessage({text: "Komentarz usunięto poprawnie.", type: "SUCCESS"})
            remove(id);
        }else{
            printMessage({text:res.body,type:"ERROR"})
        }
    }
    const saveChanges = async () => {
        const res = await editComment(id,comment);

        if(res.isSuccess) {
            printMessage({text: "Komentarz edytowano poprawnie.", type: "SUCCESS"})
            editHandle();
            update(id,comment);
        }else{
            printMessage({text:res.body,type:"ERROR"})
        }
    }

    return(
        <div className='comment'>
            <h3>{username}{role}</h3>
            <h5>{name} {surname} | {dataConvert(createTime,true)}</h5>
            {auth.username == username ?
                !edit ?<Button text={'Edytuj'} onClick={editHandle}/> :
                    <>
                        <Button text={'Zapisz'} onClick={saveChanges}/>
                        <Button text={'Cofnij zmiany'} onClick={editHandle}/>
                    </> :
                null
            }
            {auth.username == username ?
                !edit ? <Button text={'Usuń'} onClick={deleteHandle}/> : null  :
                null
            }
            <hr/>
            <div className='comment-content'>
                { !edit ? content : <textarea value={comment} onChange={e=>setComment(e.target.value)}></textarea>}
            </div>

        </div>
    )
}