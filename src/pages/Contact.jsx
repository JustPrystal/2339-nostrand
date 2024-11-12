import Form from '../components/Form';
import ParrallaxBanner from '../components/ParrallaxBanner';
import BannerImage from "../assets/images/Contact/banner2.jpg";
import { Helmet } from 'react-helmet';
import QuickNav from "../components/QuickNav";
let BannerData = {
    backgroundImage : BannerImage,
    heading : "Become a Resident",
    subHeading : "",
    description: `For more information on renting a luxury Brooklyn apartment at 2339 Nostrand , add your details to the form below and click “submit” to learn more.`
}
const NavData = {
  prevlink : {
      text : "Neighborhood" ,   
      prev : "/neighborhood#root",
  },
  nextlink : {
      text : "Home" ,   
      next : "/#root",
  }
}

const Contact = () => {
    return ( 
        <>
          <Helmet>
            <title>Contact Us | 2339 Nostrand Avenue in Flatbush, Brooklyn</title>
            <meta name="description" content="Find yourself in Flatbush, Brooklyn. Contact us for more information about renting an apartment at 2339 Nostrand Avenue in Flatbush, Brooklyn." />
          </Helmet>
          <ParrallaxBanner data={BannerData} />
          <Form />
          <QuickNav data={NavData}/>  
        </>

     );
}
 
export default Contact;
