import './footer.css'
import {Link} from "react-router-dom";

export const Footer = () => {

    return(
        <footer>
            <p><Link to="/privacy">polityka prywatności</Link></p>
            <p><Link to="/cookie">polityka ciasteczek</Link></p>
            <p>Copyright ©2024</p>
        </footer>
    )
}