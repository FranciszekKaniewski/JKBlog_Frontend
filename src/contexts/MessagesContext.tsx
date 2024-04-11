import React, {createContext, useState} from "react";
import {Message} from "../types/messages/messages";

export const messagesContext =
    createContext <{
        value:Message[],
        setMessages:React.Dispatch<React.SetStateAction<Message[]>>,
        printMessage:(message:Message)=>void,
    } | null >(null);

export const MessagesContextProvider = ({children}) => {
    const [messages, setMessages] = useState<Message[]>([]);

    const printMessage = (message:Message) =>{
        setMessages(prevState => [message,...prevState]);
    }

    return (
        <messagesContext.Provider value = {{value:messages,setMessages:setMessages,printMessage:printMessage}}>
            {children}
        </messagesContext.Provider>
    )
}