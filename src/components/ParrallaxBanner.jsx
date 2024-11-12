import { Link } from "react-router-dom";
export default function ParrallaxBanner({data}) {
    const { 
        backgroundImage,
        heading,
        description,
        buttonUrl,
        buttonText,
        color,
        mobileImage,
      } = data;
    return(
        <>
      <div className={"parrallax-banner " + color}>
        <img
          src={backgroundImage}
          alt="background showing the building"
          className={
            mobileImage
              ? "background-image mobile-disabled"
              : "background-image"
          }
        />
      </div>
      <div className="parrallax-bottom-text">
          {(heading || description) && (
            <div className="content">
              <h1
                className="heading"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <p className="description">{description}</p>
              {buttonUrl && buttonText && <Link to="/">Back to Home</Link>}
            </div>
          )}
        </div>
        </>
    )
}