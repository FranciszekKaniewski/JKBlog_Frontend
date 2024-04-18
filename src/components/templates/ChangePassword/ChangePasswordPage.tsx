import {Input} from "../../atoms/input";
import {Button} from "../../atoms/button";
import {useState} from "react";
import {usePopUp} from "../../../hooks/usePopUp";
import {changePassword} from "../../../api/user/User";

import './change-password.css'

export const ChangePasswordPage = () => {

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [repPass, setRepPass] = useState("");

    const {printMessage} = usePopUp()

    const submitHandler = async (e) => {
        e.preventDefault()

        if(newPass != repPass) {
            printMessage({text: "Hasła nie są identyczne", type: "ERROR"})
        }else{
            const res = await changePassword(oldPass,newPass)
            console.log(res)
            res.isSuccess ?
                printMessage({text: "Zmieniono hasło", type: "SUCCESS"}) :
                printMessage({text: res.body, type: "ERROR"})
        }
        setOldPass('')
        setNewPass('')
        setRepPass('')

    }

    return(
        <>
            <form className={'change-pass'} onSubmit={submitHandler}>
                <h1>Zmień hasło</h1>
                <p>Wpisz stare hasło:</p>
                <Input value={oldPass} onChange={setOldPass} type={'password'} required={true}/>
                <p>Wpisz nowe hasło:</p>
                <Input value={newPass} onChange={setNewPass} type={'password'} required={true}/>
                <p>Powtórz nowe hasło:</p>
                <Input value={repPass} onChange={setRepPass} type={'password'} required={true}/>
                <Button text={'Zapisz hasło'}/>
            </form>
        </>
    )
}