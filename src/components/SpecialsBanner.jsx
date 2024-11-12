import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import closeSvg from "../assets/images/close-circle-svgrepo-com.svg"
export default function SpecialsBanner() {
    const [offerClass, setOfferClass] = useState("specials")
    const [viewOfferClass, setViewOfferClass] = useState({
        class: "view-offer",
    })
    const openMenu = () => {
        if (offerClass === "specials") {
            setOfferClass("specials open")
            setViewOfferClass({
                class: "view-offer close",
            })
        }
        else {
            setOfferClass("specials")
            setViewOfferClass({
                class: "view-offer",
            })
        }
    }
    return (
        <section className={offerClass}>
            <div className={viewOfferClass.class} onClick={() => openMenu()}><p>Specials</p></div>
            <div className="special-banner">
                <img src={closeSvg} alt="" onClick={() => openMenu()}/>
                <div className="text-wrap">
                    <h1 className="offer-text">
                        LIMITED TIME OFFER: UP TO 2.5 MONTHS FREE!*
                    </h1>
                    <HashLink className="contact" smooth to="/contact#form">
                        *Restrictions apply, Contact for Details
                    </HashLink>
                </div>
            </div>
        </section>
    )
}