import {Button} from "../../atoms/button";
import {logout} from "../../../api/auth/logout";
import {useEffect, useState} from "react";
import {User} from "../../../types/user/user";
import {Fetch} from "../../../utils/fetch";
import {dataConvert} from "../../../utils/dataConvert";
import {UserData} from "../../atoms/UserData/UserData";
import {editUser} from "../../../api/user/User";
import {usePopUp} from "../../../hooks/usePopUp";
import {useNavigate} from 'react-router-dom'

import './account.css'

export const AccountPage = () => {

    const [user, setUser] = useState<User|null>(null);
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();
    const {printMessage} = usePopUp()

    let ignore = false;
    useEffect(()=>{
        if(!ignore) {
            (async () => {
                const res = await Fetch('/users/info');
                setUser(res.body);
            })()
        }
        return () => { ignore = true }
    },[edit])

    const submitHandler = async (e) => {
        e.preventDefault()
        const obj = {
            username: e.target[0].value ? e.target[0].value: user?.username,
            email: e.target[1].value ? e.target[1].value: user?.email,
            name: e.target[2].value,
            surname: e.target[3].value,
        }

        if(user && Object.keys(obj).every((key) =>  obj[key] === user[key])){
            setEdit(prevState => !prevState)
            return
        }

        const res = await editUser(obj)
        if(res.isSuccess){
            printMessage({text: "Zaktualizowano profil", type: "SUCCESS"})
            setEdit(prevState => !prevState)
        }else{
            printMessage({text: res.body, type: "ERROR"})
        }
    }

    const logoutHandler = async () => {
        const res = await logout()
        if(res.isSuccess){
            printMessage({text: "Wylogowano poprawnie", type: "SUCCESS"})
            navigate('/')
            setEdit(prevState => !prevState)
        }else{
            printMessage({text: res.body, type: "ERROR"})
        }
    }


    const password = () =>{
        navigate(`/zmień-hasło`);
    }

    if(!user){
        return <h1>Loading ...</h1>
    }


    return(
        <div className='account-page'>
            <h1>Konto urzytkownika {user.username}</h1>
            {edit ?
            <form onSubmit={submitHandler}>
                <UserData alias={'Nazwa konta'} value={user.username} edit={edit}/>
                <UserData alias={'E-mail'} value={user.email} edit={edit}/>
                <UserData alias={'Imię'} value={user.name} edit={edit}/>
                <UserData alias={'Nazwisko'} value={user.surname} edit={edit}/>
                <Button text={'Zapisz'}/>
                <Button text={'Cofnij zmiany'} onClick={() => setEdit(prevState => !prevState)}/>
            </form> :
            <>
                <UserData alias={'Nazwa konta'} value={user.username} edit={edit}/>
                <UserData alias={'E-mail'} value={user.email} edit={edit}/>
                <UserData alias={'Imię'} value={user.name} edit={edit}/>
                <UserData alias={'Nazwisko'} value={user.surname} edit={edit}/>
            </>
            }
            <UserData alias={'Data dołączenia'} value={dataConvert(user.createTime)}/>
            {!edit?<Button text={'Edytuj dane'} onClick={() => setEdit(prevState => !prevState)}/>:null} <br/>
            <Button text={'Zmień hasło'} onClick={password} edit={edit}/> <br/>
            <Button text={'Wyloguj się'} onClick={logoutHandler} edit={edit}/>
        </div>
    )
}