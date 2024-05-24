import Banner from "../components/Banner";
import BannerImage from "../assets/images/Home/banner.jpg";
import TwoColumn from "../components/TwoColumn";

let BannerData = {
  backgroundImage : BannerImage,
  heading : "",
  subHeading : "",
  description: ""
}
let TwoColumnData = [
  {
      variant : "",
      heading : "",
      subheading : "",
      description : "",
      image : "",
      flexDirection : "row",
      price: ""
  },
  {
      variant : "",
      heading : "",
      subheading : "",
      description : "",
      image : "",
      flexDirection : "row-reverse",
      price: ""
  },
]
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Banner data={BannerData}/>
      {
          TwoColumnData.map((section, index) => {
              return <TwoColumn key={index} data={section} />;
          })
      }
    </div>
  );
}