import Banner from "../components/Banner";
import BannerImage from "../assets/images/Neighborhood/banner3.jpg";
import TwoColumn from "../components/TwoColumn";

//2 col images

import twoColImage1 from "../assets/images/Neighborhood/Group 10.png";
import twoColImage2 from "../assets/images/Neighborhood/Group 11.png";
import twoColImage3 from "../assets/images/Neighborhood/Group 12.png";
import twoColImage4 from "../assets/images/Neighborhood/Group 13.png";
import { Helmet } from "react-helmet";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "Find Yourself in Flatbush",
  subHeading : "",
  description: "Brooklyn's Flatbush neighborhood offers something for absolutely everyone. Located just steps away from Triangle Junction and Brooklyn College, you’re never far from where you want to be. This prime location makes 2339 Nostrand Ave great for anyone looking to find their place in the city."
}
let TwoColumnData = [
    {
        variant : "blue",
        heading : "Eateries & Entertainment",
        subheading : "",
        description : "2339 Nostrand Ave is located just steps from Triangle Junction, a bustling hub that offers familiar names like Target, Starbucks, and other dining staples. When you're looking to venture away from the norm, nearby ethnic eateries, coffee shops, and lounges allow you to step off the beaten path and into established, locals-only hotspots.",
        image : twoColImage1,
        flexDirection : "row",
        price: ""
    },
    {
        variant : "white",
        heading : "Parks & Greenspaces",
        subheading : "",
        description : "Enjoying the great outdoors is easy in Flatbush. 2339 Nostrand Ave is located just a few blocks from Amersfort Park, one of the most peaceful greenspaces in New York City. Filled with beautiful cherry blossoms in the spring, old trees, and rolling hills, it is a great place to gather. Nearby, Brooklyn College's picturesque campus is another exciting feature of this section of the city.",
        image : twoColImage2,
        flexDirection : "row-reverse",
        price: ""
    },
    {
        variant : "blue",
        heading : "Art & Culture",
        subheading : "",
        description : "Located just one block from Brooklyn College, life here will expand your horizons. An area of New York City that once housed a range of immigrant families, the 'melting pot' mentality remains alive and well in this diverse, dynamic cultural center. With a myriad of volunteer organizations committed to keeping Flatbush beautiful, this neighborhood keeps getting better and better.",
        image : twoColImage3,
        flexDirection : "row",
        price: ""
    },
    {
        variant : "white",
        heading : "Public Transportation",
        subheading : "",
        description : "Enjoying the great outdoors is easy in Flatbush. 2339 Nostrand Ave is located just a few blocks from Amersfort Park, one of the most peaceful greenspaces in New York City. Filled with beautiful cherry blossoms in the spring, old trees, and rolling hills, it is a great place to gather. Nearby, Brooklyn College's picturesque campus is another exciting feature of this section of the city.",
        image : twoColImage4,
        flexDirection : "row-reverse",
        price: ""
    },
]
export default function Home() {
  return (
    <>
      <Helmet>
        <title>2339 Nostrand Avenue | Brooklyn College Apartments </title>
        <meta name="description" content="Anyone looking for apartments near Brooklyn College and Triangle Square will appreciate 2339 Nostrand Avenue’s unmatched location." />
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