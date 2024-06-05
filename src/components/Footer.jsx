import footerLogo from "../assets/images/FooterLogo.svg";
import EXRLogo from "../assets/images/EXRLogo.svg";
import fairHousingLogo from "../assets/images/fairHousingLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal"

export default function Footer(){

    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const scrollUp = ()=>{
        window.scrollTo({ top: 0});
    }

    const showModal = (e) => {
        for (let i = 0; i < modalData.length; i++) {
            if(e.target.className === modalData[i].slug){
                setModalContent(modalData[i].content)
            }
        }
        setModalShow(true)
    }
    let modalData = [
        {
            slug : "fair-housing",
            content : `<h2>Fair Housing Statement</h2>
            <p>EXR complies fully with local, state and federal fair housing laws against discrimination on the basis of race, color, religion, sex, national origin, handicap, age, marital status and/or familial status, children or other prohibited factors.</p>
            <h2>The Civil Rights Act of 1968</h2>
            <p>The Civil Rights Act of 1968 known as the Federal Fair Housing Law makes illegal any discrimination based on race, color, religion, sex or national origin in connection with the sale or rental of housing. The 1988 amendment to this Act (The Fair Housing Amendments Act of 1988) expands the coverage of this law to handicapped persons and families with children. EXR complies fully with State and local statutes and Federal Fair Housing laws.</p>
            <h2>Links</h2>
            <p>For more information, visit these websites:<br><a target="_blank" href="http://www.dhr.ny.gov/">http://www.dhr.ny.gov</a><br><a target="_blank" href="http://www.nyc.gov/html/cchr/">http://www.nyc.gov/html/cchr/</a><br><a target="_blank" href="http://portal.hud.gov/">http://portal.hud.gov</a></p>`
        },
        {
            slug : "accessibility",
            content :  ` <h2>Accessibility</h2>
            <p>We are striving to meet online usability and design requirements recommended by the World Wide Web Consortium (W3C) in its Web Content Accessibility Guidelines 2.0 Level AA, as well as requirements under the Twenty-First Century Communications and Video Accessibility Act of 2010. We are using design standards that help customers identify, interpret, understand and interact with information presented on our websites and mobile apps.</p>
            <p>Here are some helpful tips for using our sites and apps:</p>
            <ul>
                <li>Account numbers: In most instances, you won’t see your complete account number online. For security reasons, we’ll only reveal a few digits (typically the last 3 or 4) of your account number. The remaining digits are represented by a series of periods or the letter X.</li>
                <li>Dollar amounts: Please don’t use the dollar sign ($) when you include dollar amounts in any form field; it will cause an error. When you include dollar amounts, you may see one input field or two fields separated by a decimal point. In some cases, you’ll find an example adjacent to the input field(s) to help you understand how to format your amount.</li>
                <li>JavaScript: Is enabled by default in modern web browsers, if you disable it you won’t be able to enjoy all of the features of our site. Software and Recommendation Settings:</li>
            </ul>
            <p>We follow the W3C’s globally recognized standards to provide content that’s compatible with the most popular assistive technologies and web browsers. We recommend using the most current version (or the version released just prior to) of manufacturer’s assistive technology applications, along with a current version of the browsers listed below. Try different types of browsers with assistive technology applications to determine which combination works best for you.</p>
            <p>Please go to the individual manufacturer’s site for information about how to obtain them. You may also have access to assistance from local and state agencies or non-profit groups in your area.</p>`
        }
    ]
    return (
        <>
            <footer>
                <div className="inner">
                    <div className="origin-and-address">
                        <div className="logos-wrap">
                            <div className="exr-logo logo">
                                <a href="https://www.exrny.com/?utm_source=+http%3A%2F%2F150bk.com&utm_medium=referral+&utm_campaign=landing_pages"><img src={fairHousingLogo} alt="" /></a>
                            </div>
                            <div className="house-logo logo">
                                <img src={EXRLogo} alt="" />
                            </div>
                        </div>
                        <a href="https://www.google.com/maps?q=2339+Nostrand+Ave,+Brooklyn,+NY+11210,+USA&ftid=0x89c244ad93161391:0xc376b00294c5f48e" >
                        2339 Nostrand Ave, <br /> Brooklyn, NY 11210, USA</a>
                    </div>
                    <div className="logo-and-copyright">
                        <Link onClick={scrollUp} to="/"><img src={footerLogo} alt="footer logo" /></Link>
                        <div className="extra-links">
                            <p className='accessibility' onClick={showModal}>Accessibility</p> |
                            <p className='fair-housing' onClick={showModal}>Fair Housing Notice</p>
                        </div>
                        <p> Copyright © 2023 EXR, All rights reserved.</p>
                    </div>
                    <div className="links">
                        <NavLink onClick={scrollUp} className="link" to="/">Home</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/residences">Residences</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/amenities">Amenities</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/availabilities">Availabilities</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/neighborhood">Neighborhood</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </footer>
            {
                modalShow && <Modal data={modalContent} setter={setModalShow}/>
            }
        </>
    );
}