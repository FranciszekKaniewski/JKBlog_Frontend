import {useContext, useEffect, useState} from "react";
import {messagesContext} from "../../../contexts/MessagesContext";
import {Message} from "../../../types/messages/messages";

import './pop-up.css'


export const PopUp = ({message}:{message:Message}) =>{

    const s =
        message.type === "ERROR" ?
            {backgroundColor: "var(--Red)",animation:''} :
            message.type === "SUCCESS" ?
                {backgroundColor: "var(--Green)",animation:''} :
                {backgroundColor: "var(--Gray)",animation:''}

    const [style, setStyle] = useState(s)

    const messages = useContext(messagesContext);

    const remove = () =>{
        setStyle(prevState => ({animation:'move-out .6s reverse',backgroundColor: prevState.backgroundColor}));
        setTimeout(()=> {
            messages?.setMessages(prevState => prevState.slice(1));
        } ,590);
    }

    useEffect(()=>{
        setTimeout(()=>{
                remove()
        },4000);
    },[]);



    return(
        message?<div onClick={remove} style={style} className="pop-up">
            <p>{message.text}</p>
        </div>:null
    )
}