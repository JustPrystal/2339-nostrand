const TwoColumn = ({data}) => {
    const {
        variant,
        heading,
        // subheading,
        description,
        image,
        flexDirection,
        price
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
                    </div>
                    <div class="image-wrap">
                        <img src={image} alt="" className="image" />
                    </div>
                </div>
            </div>
        </> 
    );
}
 
export default TwoColumn;