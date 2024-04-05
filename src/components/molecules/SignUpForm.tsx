import React from "react";

import {Input} from "../atoms/input";
import {Button} from "../atoms/button";


type Props = {
    userName: string;
    email: string;
    name: string;
    surname: string;
    password: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setSurname: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    registerFetch: (e) => Promise<void>;
}

export const SignUpForm = ({userName,email,name,surname,password,setUserName,setEmail,setName,setSurname,setPassword,registerFetch}:Props) => (
    <form onSubmit={registerFetch}>
        <Input placeholder={"nazwa konta*"} value={userName} required={true} onChange={setUserName}/>
        <Input placeholder={"email*"} value={email} required={true} onChange={setEmail}/>
        <Input placeholder={"imię"} value={name} onChange={setName}/>
        <Input placeholder={"nazwisko"} value={surname} onChange={setSurname}/>
        <Input type={"password"} placeholder={"hasło*"} value={password} required={true} onChange={setPassword}/>
        <Button text={"Utwóż konto"}/>
    </form>
)