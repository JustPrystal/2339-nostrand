import Banner from "../components/Banner";
import BannerImage from "../assets/images/Amenities/banner5.jpg";
import TwoColumn from "../components/TwoColumn";

//2 col images

import twoColImage1 from "../assets/images/Amenities/Group 3.png";
import twoColImage2 from "../assets/images/Amenities/Group 4.png";
import twoColImage3 from "../assets/images/Amenities/Group 5.png";
import twoColImage4 from "../assets/images/Amenities/Group 6.png";
import twoColImage5 from "../assets/images/Amenities/Group 7.png";
import twoColImage6 from "../assets/images/Amenities/Group 8.png";
import twoColImage7 from "../assets/images/Amenities/Group 9.png";
import twoColImage8 from "../assets/images/Amenities//Layer 20.png";
import twoColImage9 from "../assets/images/Amenities//Layer 30.png";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "Brooklyn Living, Upgraded",
  subHeading : "",
  description: "Living at 2339 Nostrand Ave means you’re able to take advantage of the building’s array of impressive amenities. You’ll enjoy stylish common areas, a state-of-the-art fitness center, and a manicured rooftop terrace, all just steps from your front door."
}
let TwoColumnData = [
    {
        variant : "white",
        heading : "Lobby",
        subheading : "",
        description : "Every time you enter, you'll be greeted by the building's chic lobby, filled with contemporary design elements and modern furnishings.",
        image : twoColImage8,
        flexDirection : "row",
        price: ""
    },
    {
        variant : "blue",
        heading : "Fitness Center",
        subheading : "",
        description : "Step up your fitness without an expensive gym membership by using the building's state-of-the-art fitness center, equipped with modern cardio machines, free weights, and more.",
        image : twoColImage1,
        flexDirection : "row-reverse",
        price: ""
    },
    {
        variant : "white",
        heading : "Covered Parking",
        subheading : "",
        description : "Coming home at the end of a long day just got easier. Covered parking makes street parking a thing of the past.",
        image : twoColImage2,
        flexDirection : "row",
        price: ""
    },
    {
        variant : "blue",
        heading : "Bike Storage",
        subheading : "",
        description : "A designated bike storage area allows you to safely secure your bicycle when not in use.",
        image : twoColImage3,
        flexDirection : "row-reverse",
        price: ""
    },
    {
        variant : "white",
        heading : "Laundry Room",
        subheading : "",
        description : "On-site laundry facilities make it easy to incorporate laundry into your routine.",
        image : twoColImage4,
        flexDirection : "row",
        price: ""
    },  
    {
        variant : "blue",
        heading : "Co-Working Space",
        subheading : "",
        description : "Step up your fitness without an expensive gym membership by using the building's state-of-the-art fitness center, equipped with modern cardio machines, free weights, and more.",
        image : twoColImage5,
        flexDirection : "row-reverse",
        price: ""
    },
    {
        variant : "white",
        heading : "Terrace",
        subheading : "",
        description : "A designated outdoor space offers plenty of room to breathe when you want to step away.",
        image : twoColImage6,
        flexDirection : "row",
        price: ""
    }, 
    {
        variant : "blue",
        heading : "Rooftop Terrace",
        subheading : "",
        description : "On warm summer nights, head to the rooftop terrace to lounge, entertain, or mingle with your neighbors.",
        image : twoColImage7,
        flexDirection : "row-reverse",
        price: ""
    },
    {
        variant : "white",
        heading : "Tenant Storage",
        subheading : "",
        description : "Keep your living space organized by taking advantage of the building's convenient tenant storage area.",
        image : twoColImage9,
        flexDirection : "row",
        price: ""
    }, 
]
export default function Home() {
  return (
    <div>
      <Banner data={BannerData}/>
      {
          TwoColumnData.map((section, index) => {
              return <TwoColumn key={index} data={section} />
          })
      }
    </div>
  );
}