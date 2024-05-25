import { Link } from "react-router-dom";
import React from "react";

const Banner = ({data}) => {
    const {  
        backgroundImage,
        heading,
        subHeading,
        description,
        buttonUrl, 
        buttonText
    } = data;
    return ( 
        <>
            <div className="banner">
                <img src={backgroundImage} alt="" className="background-image" />
                <div className="inner">
                    {(heading || description) && <div className="content" >
                        <h1 className="heading" data-aos="fade-left">{heading}</h1>
                        <p className="sub-heading" data-aos="fade-left">{subHeading}</p>
                        <p className="description" data-aos="fade-left">{description}</p>
                        {
                            buttonUrl && buttonText && (
                                <Link to="/">Back to Home</Link>
                            )
                        }
                    </div>}
                </div>
            </div>
        </>
     );
}
 
export default Banner;