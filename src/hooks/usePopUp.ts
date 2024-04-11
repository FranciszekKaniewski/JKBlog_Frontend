import {useContext} from "react";
import {messagesContext} from "../contexts/MessagesContext";

export const usePopUp = () => {
    return useContext(messagesContext);
}