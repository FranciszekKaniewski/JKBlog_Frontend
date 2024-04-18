import {useState} from "react";
import {Button} from "../../atoms/button";

import './sign-page.css'
import {register} from "../../../api/auth/register";
import {login} from "../../../api/auth/login";
import {useAuth} from "../../../hooks/useAuth";
import {SignInForm} from "../../molecules/SignInForm";
import {SignUpForm} from "../../molecules/SignUpForm";
import {usePopUp} from "../../../hooks/usePopUp";

export const SignPage = () => {

    const [loginForm, setLoginForm] = useState(true);
    const loginFormHandler = (bool:boolean) => setLoginForm(bool);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const { setAuth } = useAuth();
    const {printMessage} = usePopUp();


    const loginFetch = async (e) =>{
        e.preventDefault();
        const res = await login({email,pwd:password});

        console.log(res)
        if(res.isSuccess) {
            printMessage({text:"Zalogowano",type:"SUCCESS"})
            setAuth({role: res.body.role,name: res.body.username});
        }else{
            res.body === 429 ?
                printMessage({text:"Zbyt wiele prób logowania! Spróbuj ponownie za 5 min.",type:"ERROR"}):
                printMessage({text:res.body,type:"ERROR"})
            setEmail('')
            setPassword('')
        }
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
                <SignInForm
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    loginFetch={loginFetch}
                />
                :
                <SignUpForm
                    userName={userName}
                    email={email}
                    name={name}
                    surname={surname}
                    password={password}
                    setUserName={setUserName}
                    setEmail={setEmail}
                    setName={setName}
                    setSurname={setSurname}
                    setPassword={setPassword}
                    registerFetch={registerFetch}
                />
            }
        </div>
    )
}