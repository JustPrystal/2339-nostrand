import footerLogo from "../assets/images/FooterLogo.svg";
import EXRLogo from "../assets/images/EXRLogo.svg";
import fairHousingLogo from "../assets/images/fairHousingLogo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            <div className="inner">
                <div className="origin-and-address">
                    <div className="logos-wrap">
                        <div className="exr-logo logo">
                            <a href="/"><img src={EXRLogo} alt="" /></a>
                        </div>
                        <div className="house-logo logo">
                            <img src={fairHousingLogo} alt="" />
                        </div>
                    </div>
                    <p>5920 bay parkway,<br />Mapleton, NY 10801</p>
                </div>
                <div className="logo-and-copyright">
                    <Link to="/"><img src={footerLogo} alt="footer logo" /></Link>
                    <p>Accessibility | Fair Housing Notice</p>
                    <p> Copyright Â© 2023 EXR, All rights reserved.</p>
                </div>
                <div className="links">
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/residences">Residences</NavLink>
                    <NavLink className="link" to="/building">Building</NavLink>
                    <NavLink className="link" to="/availabilities">Availabilities</NavLink>
                    <NavLink className="link" to="/neighborhood">Neighborhood</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>
                </div>
            </div>
        </footer>
    );
}