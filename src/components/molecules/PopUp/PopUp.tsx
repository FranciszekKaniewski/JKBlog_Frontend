import {useContext} from "react";
import {messagesContext} from "../../../contexts/MessagesContext";
import {Message} from "../../../types/messages/messages";

import './pop-up.css'


export const PopUp = ({message}:{message:Message}) =>{

    const messages = useContext(messagesContext);

    const remove = () =>{
        if(message) messages?.setMessages(prevState => prevState.slice(1));
    }

    const style = {backgroundColor: "red"}

    return(
        message?<div onClick={remove} style={style} className="pop-up">
            <p>{message.text}</p>
        </div>:null
    )
}