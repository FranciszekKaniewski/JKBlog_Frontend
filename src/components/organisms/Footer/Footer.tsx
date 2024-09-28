import './footer.css'
import {Link} from "react-router-dom";
import {FacebookIcon} from "../../../assets/icons/facebook.tsx";
import {HospitalIcon} from "../../../assets/icons/HospitalIcon.tsx";
import {InstagramIcon} from "../../../assets/icons/instagram.tsx";

export const Footer = () => {

    return(
        <footer>
            <div>
                <p><Link to="/cookie">polityka ciasteczek</Link></p>
                <p><Link to="/privacy">polityka prywatności</Link></p>
            </div>
            <div>
                <p><br/></p>
                <p>Copyright ©2024</p>
            </div>
            <div className="icons">
                <i><a target="_blank" href="https://www.facebook.com/joanka.ka.5"><FacebookIcon/></a></i>
                <i><a target="_blank" href="https://www.instagram.com/primavet.pl"><InstagramIcon/></a></i>
                <i><a target="_blank" href="http://www.primavet.pl"><HospitalIcon/></a></i>
            </div>
        </footer>
    )
}