import { HashLink } from "react-router-hash-link"
import arrowSvg from "../assets/images/right-arrow-svgrepo-com.svg"
export default function QuickNav({data}) {
    return (
        <>
            <section className="quick">
                <div className="inner">
                    <div className="prev">
                        <HashLink to={data.prevlink.prev} smooth>
                            {data.prevlink.text}
                            <img className="arrow rotated"  src={arrowSvg}/>
                        </HashLink>
                    </div>


                    <div className="text">
                        <HashLink to="/contact#form" smooth>Schedule a Tour</HashLink>
                    </div>

                    <div className="next">
                        <HashLink to={data.nextlink.next} smooth>
                            {data.nextlink.text}
                            <img className="arrow" src={arrowSvg}/>
                        </HashLink>
                    </div>
                </div>
            </section>
        </>
    )
}