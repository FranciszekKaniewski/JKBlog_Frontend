import {useContext} from "react";
import {messagesContext} from "../../../contexts/MessagesContext";
import {PopUp} from "../../molecules/PopUp/PopUp";

import './messages.css'

export const Messages = () => {

    const messages= useContext(messagesContext)


    const view = messages?.value.map((e,i)=> <PopUp key={i} message={e} />)

    return(
        messages?.value[0] ? <div className="pop-up messages">
            {view}
        </div>: null
    )
}