import Banner from "../components/Banner";
import BannerImage from "../assets/images/Home/banner.jpg";
import TwoColumn from "../components/TwoColumn";

//2 col images

import twoColImage1 from "../assets/images/Home/Group 2.png";
import twoColImage2 from "../assets/images/Home/Group 3.png";
import twoColImage3 from "../assets/images/Home/Group 4.png";
import { Helmet } from "react-helmet";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "Flatbush At Its Finest",
  subHeading : "2339 Nostrand Ave offers luxury apartments in a prime Brooklyn location.",
  description: "Located in historic Flatbush, these residences offer you endless opportunities – relax in your luxury residence or explore the surrounding city. No matter what you choose, you'll find that life at 2339 Nostrand Ave is simply unmatched."
}
let TwoColumnData = [
  {
      variant : "white",
      heading : "Undeniable Sophistication",
      subheading : "",
      description : "The Studio, 1 Bedroom, and 2 Bedroom Brooklyn apartments for rent at 2339 Nostrand Ave are ready to redefine your lifestyle. Sophisticated interiors and designer fixtures make these living spaces perfect for relaxing, entertaining, and everything in between.",
      image : twoColImage2,
      flexDirection : "row",
      price: "",
      cta: "/residences"
  },
  {
      variant : "blue",
      heading : "Upscale Amenities",
      subheading : "",
      description : "The array of upscale amenities offered at 2339 Nostrand Ave is designed for the modern New Yorker. Consider the onsite coworking space, fitness center, and rooftop terrace an extension of your living space.",
      image : twoColImage1,
      flexDirection : "row-reverse",
      price: "",
      cta: "/amenities"
  },
  {
      variant : "white",
      heading : "Unmatched Atmosphere",
      subheading : "",
      description : "Flatbush, Brooklyn, is an exciting section of the city that offers dining and entertainment just moments from your front door. Proximity to public transportation, Brooklyn College, and Amersfort Park only enhances the appeal of this building's prime location.",
      image : twoColImage3,
      flexDirection : "row",
      price: "",
      cta: "/neighborhood"
  },
]
export default function Home() {
  return (
    <>
      <Helmet>
        <title>2339 Nostrand Ave | Luxury Apartments in Brooklyn</title>
        <meta name="description" content="2339 Nostrand Avenue offers luxury apartments in historic Flatbush, one of Brooklyn’s most sought after neighborhoods." />
      </Helmet>
      <Banner data={BannerData}/>
      {
          TwoColumnData.map((section, index) => {
              return <TwoColumn key={index} data={section} />
          })
      }
    </>
  );
}