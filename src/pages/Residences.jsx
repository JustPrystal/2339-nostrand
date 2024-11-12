import Banner from "../components/Banner";
import BannerImage from "../assets/images/Residences/Residences banner.png";
import TwoColumn from "../components/TwoColumn";
import QuickNav from "../components/QuickNav";
//2 col images

import twoColImage1 from "../assets/images/Residences/Residences 1 Bed.png";
// import twoColImage2 from "../assets/images/Residences/Residences Studio.png";
import twoColImage3 from "../assets/images/Residences/Group-3.png";
import { Helmet } from "react-helmet";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "Designed to Impress",
  subHeading : "",
  description: "The residences of 2339 Nostrand feel fresh, airy, and open. Floor-to-ceiling windows and balconies on select units make every apartment feel even more expansive than it already is. An array of thoughtful design elements ensures these luxury Brooklyn apartments make a lasting impression."
}
const NavData = {
  prevlink : {
      text : "Home" ,   
      prev : "/#root",
  },
  nextlink : {
      text : "Amenities" ,   
      next : "/amenities#root",
  }
}
let TwoColumnData = [
  // {
  //     variant : "white",
  //     heading : "Studio",
  //     subheading : "",
  //     description : "The large Brooklyn Studio apartments for rent at 2339 Nostrand are ideal for any lifestyle. Impressive floorplans allow you to design a living space that perfectly aligns with your needs, while floor-to-ceiling windows make them bright, airy, and elegant.",
  //     image : twoColImage2,
  //     flexDirection : "row",
  //     price: "2,700"
  // },
  {
      variant : "blue",
      heading : "1 Bedroom",
      subheading : "",
      description : "The 1 Bedroom apartments at 2339 Nostrand offer separation between living spaces. Breathtaking interiors, stainless steel appliances, and contemporary finishes elevate each unit, making them an ideal place for anyone looking for an apartment that is chic enough for entertaining but comfortable enough for relaxing.",
      image : twoColImage1,
      flexDirection : "row",
      price: "3,300"
  },
  {
      variant : "white",
      heading : "2 Bedroom",
      subheading : "",
      description : "If space is of the utmost importance, the 2 Bedroom Flatbush apartments at 2339 Nostrand are an ideal choice. Along with expansive floorplans, these stylish units offer airy open concept living areas with floor-to-ceiling windows, making them a tranquil escape from bustling city life.",
      image : twoColImage3,
      flexDirection : "row-reverse",
      price: "4,025"
  },
]
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Studio, One Bedroom, & Two Bedroom Luxury Flatbush Apartments</title>
        <meta name="description" content="Elevate your lifestyle in the luxury Brooklyn apartments for rent at 2339 Nostrand Avenue. These large Flatbush apartments are ready to welcome you home." />
      </Helmet>
      <Banner data={BannerData}/>
      {
          TwoColumnData.map((section, index) => {
              return <TwoColumn key={index} data={section} />
          })
      }
      <QuickNav data={NavData}/>
    </>
  );
}