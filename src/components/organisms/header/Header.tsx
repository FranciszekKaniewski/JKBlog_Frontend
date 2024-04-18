import { Link } from 'react-router-dom';

import logo from '../../../assets/imgs/jk.png'
import './header.css'
import {useAuth} from "../../../hooks/useAuth";
import {useState} from "react";

export const Header = () => {

    const [list, setList] = useState(false);

    const { auth } = useAuth()

    return(
        <header>
            <Link to="/"><img src={logo} alt="logo" height={100}/></Link>
            <Link to="/wpisy">Wszystkie wpisy</Link>

            <Link to="/login">{auth ? auth.username ?? 'Zaloguj się' : 'Loading...'}</Link>
        </header>
    )
}