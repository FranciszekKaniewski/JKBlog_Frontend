import {Button} from "../../atoms/button";
import {logout} from "../../../api/auth/logout";
import {useEffect, useState} from "react";
import {User} from "../../../types/user/user";
import {Fetch} from "../../../utils/fetch";
import {dataConvert} from "../../../utils/dataConvert";

export const AccountPage = () => {

    const [user, setUser] = useState<User|null>(null);

    useEffect(()=>{
        (async ()=>{
            const res = await Fetch('/users/info');
            setUser(res.body);
        })()
    },[])

    if(!user){
        return <h1>Loading ...</h1>
    }

    return(
        <>
            <h1>Konto urzytkownika {user.username}</h1>
            <p>nazwa konta: {user.username}</p>
            <p>email: {user.email}</p>
            <p>imię: {user.name}</p>
            <p>nazwisko: {user.surname}</p>
            <p>data dołączenia: {dataConvert(user.createTime)}</p>
            <Button text={'Wyloguj się'} onClick={logout}/>
        </>
    )
}