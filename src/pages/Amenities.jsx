import Banner from "../components/Banner";
import BannerImage from "../assets/images/Amenities/banner5.jpg";
import TwoColumn from "../components/TwoColumn";
import QuickNav from "../components/QuickNav";
//2 col images

import twoColImage1 from "../assets/images/Amenities/Group 3.png";
import twoColImage2 from "../assets/images/Amenities/Group 4.png";
import twoColImage3 from "../assets/images/Amenities/Group 5.png";
import twoColImage4 from "../assets/images/Amenities/Group 6.png";
import twoColImage5 from "../assets/images/Amenities/Group 7.png";
import twoColImage6 from "../assets/images/Amenities/Group 8.png";
import twoColImage7 from "../assets/images/Amenities/Group 9.png";
import twoColImage8 from "../assets/images/Amenities//Layer_20_new.png";
//import twoColImage9 from "../assets/images/Amenities//Layer 30.png";
import { Helmet } from "react-helmet";
const NavData = {
    prevlink : {
        text : "Residences" ,   
        prev : "/residences#root",
    },
    nextlink : {
        text : "Availabilities" ,   
        next : "/availabilities#root",
    }
}
let BannerData = {
    backgroundImage: BannerImage,
    heading: "Brooklyn Living, Upgraded",
    subHeading: "",
    description: "Living at 2339 Nostrand means you can take advantage of the building’s array of impressive amenities. You’ll enjoy stylish common areas, a state-of-the-art fitness center, and a rooftop terrace, all just steps from your front door."
}
let TwoColumnData = [
    {
        variant: "blue",
        heading: "Lobby",
        subheading: "",
        description: "Every time you enter, you'll be greeted by the building's chic lobby, filled with contemporary design elements and modern furnishings.",
        image: twoColImage8,
        flexDirection: "row",
    },
    {
        variant: "white",
        heading: "Rooftop Terrace",
        subheading: "",
        description: "Our 7th-floor rooftop terrace offers stunning city views and features grills, perfect for outdoor dining and entertaining. Enjoy a peaceful escape with panoramic views of the neighborhood.",
        image: twoColImage7,
        flexDirection: "row-reverse",
    },
    {
        variant: "blue",
        heading: "Co-Working Space",
        subheading: "",
        description: "Anyone with a modern or hybrid work schedule will appreciate the on-site Co-Working Space, which allows you to separate where you work from where you live.",
        image: twoColImage5,
        flexDirection: "row",
    },
    {
        variant: "white",
        heading: "Zen Garden",
        subheading: "",
        description: "The Zen Garden on the ground level provides a tranquil retreat with lush greenery, offering a serene space for relaxation. Immerse yourself in a calming, Zen-inspired atmosphere right at home.",
        image: twoColImage6,
        flexDirection: "row-reverse",
    },
    {
        variant: "blue",
        heading: "Fitness Center",
        subheading: "",
        description: "Step up your fitness without an expensive gym membership by using the building's state-of-the-art fitness center, equipped with modern cardio machines, free weights, and more.",
        image: twoColImage1,
        flexDirection: "row",
    },
    {
        variant: "white",
        heading: "Covered Parking",
        subheading: "",
        description: "Coming home at the end of a long day just got easier. Covered parking makes street parking a thing of the past.",
        image: twoColImage2,
        flexDirection: "row-reverse",
    },
    {
        variant: "blue",
        heading: "Laundry Room",
        subheading: "",
        description: "On-site laundry facilities make it easy to incorporate laundry into your routine.",
        image: twoColImage4,
        flexDirection: "row",
    },
    {
        variant: "white",
        heading: "Bike Storage",
        subheading: "",
        description: "A designated bike storage area allows you to safely secure your bicycle when not in use.",
        image: twoColImage3,
        flexDirection: "row-reverse",
    },
    // {
    //     variant: "white",
    //     heading: "Tenant Storage",
    //     subheading: "",
    //     description: "Keep your living space organized by taking advantage of the building's convenient tenant storage area.",
    //     image: twoColImage9,
    //     flexDirection: "row",
    // },
]
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Enjoy Upscale Amenities at 2339 Nostrand Avenue in Flatbush</title>
                <meta name="description" content="This luxury Flatbush apartment complex features incredible extras like covered parking, a state-of-the-art fitness center, and a rooftop Zen Garden." />
            </Helmet>
            <Banner data={BannerData} />
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />
                })
            }
            <QuickNav data={NavData}/>
        </>
    );
}