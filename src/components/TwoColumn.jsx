import { Link } from "react-router-dom";

const TwoColumn = ({data}) => {
    const scrollUp = ()=>{
        window.scrollTo({ top: 0});
    }
    const {
        variant,
        heading,
        description,
        image,
        imageDesc,
        flexDirection,
        price,
        cta,
        label,
    } = data;
    return (
        <>
            <div class={variant + " two-column " + flexDirection}>
                <div class="inner" style= {{
                        display:"flex",
                        flexDirection:flexDirection,
                        justifyContent:"center",
                    }} >
                    <div class="content-wrap">
                        <h2 class="heading">
                            {heading}
                        </h2>
                        <p class="text">
                            {description}
                        </p>
                        {
                             
                             price && <p class="price">
                                Starting at ${price}
                            </p>
                        }
                        {
                             
                             cta && <Link class="cta" to={cta} onClick={scrollUp} aria-label={label}>
                                Learn More
                            </Link>
                        }
                    </div>
                    <div class="image-wrap">
                        <img src={image} alt={imageDesc} className="image" />
                    </div>
                </div>
            </div>
        </> 
    );
}
 
export default TwoColumn;