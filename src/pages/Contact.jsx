import Form from '../components/Form';
import Banner from "../components/Banner";
import BannerImage from "../assets/images/Contact/banner2.jpg";
import { Helmet } from 'react-helmet';

let BannerData = {
    backgroundImage : BannerImage,
    heading : "Become a Resident",
    subHeading : "",
    description: `For more information on renting a luxury Brooklyn apartment at 2339 Nostrand Ave, add your details to the form below and click “submit” to learn more.`
}


const Contact = () => {
    return ( 
        <>
          <Helmet>
            <title>Contact Us | 2339 Nostrand Avenue in Flatbush, Brooklyn</title>
            <meta name="description" content="Find yourself in Flatbush, Brooklyn. Contact us for more information about renting an apartment at 2339 Nostrand Avenue in Flatbush, Brooklyn." />
          </Helmet>
          <Banner data={BannerData} />
          <Form />  
        </>
     );
}
 
export default Contact;
