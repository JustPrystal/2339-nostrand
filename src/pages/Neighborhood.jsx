import Banner from "../components/Banner";
import BannerImage from "../assets/images/Neighborhood/banner3.jpg";
import TwoColumn from "../components/TwoColumn";
import { Helmet } from "react-helmet";
import { useState } from "react";
import MapContainer from "../components/Map";
import MapLegend from '../components/MapLegend';


//2 col images

import twoColImage1 from "../assets/images/Neighborhood/Group 10.png";
import twoColImage2 from "../assets/images/Neighborhood/Group 11.png";
import twoColImage3 from "../assets/images/Neighborhood/Group 12.png";
import twoColImage4 from "../assets/images/Neighborhood/Group 13.png";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "Find Yourself in FlatbushR",
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
let MaplegendData = [
  {
      heading : "Points of Interest",
      list : [
          {
             place : "Maimonides Midwood Community Hospital",
             coords : [-73.948536,40.613817]
          },
          {
             place : "Paerdegat Park",
             coords : [-73.938119, 40.638197]
          },
          {
             place : "Fraser Square",
             coords : [-73.941214, 40.619934]
          },
          {
             place : "SUNY Downstate Medical School",
             coords : [-73.946671, 40.655174]
          },
          {
             place : "Nostrand Playground",
             coords : [-73.946944, 40.637927]
          },
          {
             place : "Amersfort Park",
             coords : [-73.939012, 40.628591]
          },
          {
             place : "Andries Playground",
             coords : [-73.94645, 40.622754]
          },
          {
             place : "Brooklyn College",
             coords : [-73.951848, 40.630894]
          },
          {
             place : "Mount Sinai Brooklyn",
             coords : [-73.942866, 40.618658]
          },
      ]
  },
  {
      heading : "Dining & Drinking",
      list : [
          {
              place : "Starbucks",
              coords : [-73.948674, 40.632272]
          },
          {
              place : "Sip N Chat Cocktail Lounge",
              coords : [-73.949214, 40.640769]
          },
          {
              place : "Cafè Lakay",
              coords : [-73.943565, 40.629734]
          },
          {
              place : "Perizia Kosher Pizza",
              coords : [-73.946643, 40.626993]
          },
          {
              place : "The Juicy Box",
              coords : [-73.94704, 40.62904]
          },
          {
              place : "Dallas BBQ Nostrand Ave",
              coords : [-73.947832, 40.632557]
          },
          {
              place : "That Sushi Spot",
              coords : [-73.945689, 40.621812]
          },
          {
              place : "Kaff's Bake Shop",
              coords : [-73.947318, 40.626496]
          },
          {
              place : "Dunkin'",
              coords : [-73.948536, 40.638449]
          },
      ]
  },
  {
    heading : "Transit",
    list : [
        {
            place : "B44 Bus",
            coords : [-73.947323, 40.628976]
        },
        {
            place : "B & Q bus line",
            coords : [-73.951669, 40.626345]
        },
        {
            place : "Train Line 2 & 5",
            coords : [-73.947584, 40.632856]
        },
        {
            place : "2 & 5 Train",
            coords : [-73.948408, 40.639979]
        },
        {
            place : "Nostrand Bus Line",
            coords : [-73.947351, 40.629174]
        },
    ]
}
]
export default function Home() {
  const [poi, setPoi] = useState([])
  const [poiTitle, setPoiTitle] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [flyData, setFlyData] = useState({
    point : "",
    condition : false 
  });
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
      <MapContainer title={poiTitle} coords={poi} showPopup={showPopup} flyData={flyData} setFlyData={setFlyData}/>
      <MapLegend data={MaplegendData} setPoi={setPoi} setFlyData={setFlyData} flyData={flyData} setPoiTitle={setPoiTitle} setShowPopup={setShowPopup}/>
    </>
  );
}