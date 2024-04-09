import { Link } from 'react-router-dom';

import logo from '../../../assets/imgs/jk.png'
import './header.css'

export const Header = () => {

    return(
        <header>
            <Link to="/wpisy">Wszystkie wpisy</Link>
            <Link to="/"><img src={logo} alt="logo" height={100}/></Link>
            <Link to="/login">Moje konto</Link>
        </header>
    )
}