import React, {FormEvent} from "react";

import {Input} from "../atoms/input";
import {Button} from "../atoms/button";


type Props = {
    email: string;
    password: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    loginFetch: (e:FormEvent) => Promise<void>;
}

export const SignInForm = ({email,password,setEmail,setPassword,loginFetch}:Props) => (
    <form onSubmit={(e)=>loginFetch(e)}>
        <Input type={"email"} placeholder={"email"} required={true} value={email} onChange={setEmail}/>
        <Input type={"password"} placeholder={"hasło"} required={true} value={password} onChange={setPassword}/>
        <Button text={"Zaloguj"} />
    </form>
)