import {useContext, useState} from "react";
import {Input} from "../atoms/input";
import {Button} from "../atoms/button";

import './LogInPage.css'
import {register} from "../../api/auth/register";
import {login} from "../../api/auth/login";
import {AuthContext} from "../../contexts/AuthContext";

export const LogInPage = () => {

    const [loginForm, setLoginForm] = useState(true);
    const loginFormHandler = (bool:boolean) => setLoginForm(bool);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const { user, setUser } = useContext(AuthContext);


    const loginFetch = async (e) =>{
        e.preventDefault();
        const res = await login({email,pwd:password});
        console.log(res.body);
        setUser({name: res.body.username, role: res.body.role})
    }

    const registerFetch = async(e) =>{
        e.preventDefault();
        await register({username:userName, email, name, surname,pwd:password});
    }

    return (
        <div className="auth">
            <div className="buttons">
                <Button active={loginForm} text={"Zaloguj"} onClick={()=>loginFormHandler(true)}/>
                <Button active={!loginForm} text={"Utwórz konto"} onClick={()=>loginFormHandler(false)}/>
            </div>

            {loginForm ?
                <form>
                    <Input type={"text"} placeholder={"email"} value={email} onChange={setEmail}/>
                    <Input type={"password"} placeholder={"hasło"} value={password} onChange={setPassword}/>
                    <Button text={"Zaloguj"} onClick={loginFetch}/>
                </form>
                :
                <form>
                    <Input placeholder={"nazwa konta*"} value={userName} onChange={setUserName}/>
                    <Input placeholder={"email*"} value={email} onChange={setEmail}/>
                    <Input placeholder={"imię"} value={name} onChange={setName}/>
                    <Input placeholder={"nazwisko"} value={surname} onChange={setSurname}/>
                    <Input type={"password"} placeholder={"hasło*"} value={password} onChange={setPassword}/>
                    <Button text={"Utwóż konto"} onClick={registerFetch}/>
                </form>
            }
        </div>
    )
}