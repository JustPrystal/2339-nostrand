import Table from '../components/Table';
import Banner from "../components/Banner";
import BannerImage from "../assets/images/Availabilities/Availabilites-Banner.png";
import { Helmet } from 'react-helmet';
import QuickNav from "../components/QuickNav";
import floorPlan_1A from '../assets/images/Availabilities/Floorplans/1A.jpeg';
//import floorPlan_1D from '../assets/images/Availabilities/Floorplans/1D.jpeg';
import floorPlan_2A from '../assets/images/Availabilities/Floorplans/2A.jpeg';
import floorPlan_ELine from '../assets/images/Availabilities/Floorplans/3-6E.jpeg';
import floorPlan_CLine from '../assets/images/Availabilities/Floorplans/3-7C.jpeg';
import floorPlan_HLine from '../assets/images/Availabilities/Floorplans/4-6H.jpeg';
import floorPlan_JLine from '../assets/images/Availabilities/Floorplans/5-6J.jpeg';
const Availabilities = () => {
    const NavData = {
        prevlink : {
            text : "Amenities" ,   
            prev : "/amenities#root",
        },
        nextlink : {
            text : "Neighborhood" ,   
            next : "/neighborhood#root",
        }
      }
    let TableData = [
        [
            {
                residence : "2A",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "3,400.00",
                netprice : '3,022.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=P7qsw7yLEqT",
                floorPlan : floorPlan_2A,
            },
            {
                residence : "4E",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "3,375.00",
                netprice : '3,115.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=jn4vSRT4wZP",
                floorPlan : floorPlan_ELine,
            },
            {
                residence : "6J",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "3,400.00",
                netprice : '2,914.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=D9fupdF2rau",
                floorPlan : floorPlan_JLine,
            },
            
        ],
        [
            {
                residence : "1A",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "4,350.00",
                netprice : '4,015.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=6xFUg7gqGqJ",
                floorPlan : floorPlan_1A,
            },
            {
                residence : "3C",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "4,025.00",
                netprice : '3,715.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=tNa1NHFevEy",
                floorPlan : floorPlan_CLine,
            },
            {
                residence : "5H",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "4,000.00",
                netprice : '3,555.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=tYRSLrTqc2V",
                floorPlan : floorPlan_HLine,
            },
            {
                residence : "6C",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "4,075.00",
                netprice : '3,761.00',
                tour3d : "View",
                tour3dLink : "https://my.matterport.com/show/?m=tNa1NHFevEy",
                floorPlan : floorPlan_CLine,
            },


            // Deleted Availabilities:

            // {
            //     residence : "1D",
            //     type : "1-bed",
            //     bedBath : "1 Bed | 1 Bath",
            //     outdoor : "",
            //     price : "3,400.00",
            //     netprice : '2,914.00',
            //     tour3d : "View",
            //     tour3dLink : "https://my.matterport.com/show/?m=CV96zWVWun2",
            //     floorPlan : floorPlan_1D,
            // },
        ]
    ]
    let BannerData = {
        backgroundImage : BannerImage,
        heading : "Availabilities",
        subHeading : "",
        subtitle: "Find the Apartment You’ve Been Searching For",
        description: "A fresh start awaits you at 2339 Nostrand. From spacious studios to large 2-bedroom units, browse our available listings below to find the luxury Brooklyn apartment that perfectly aligns with your lifestyle."
    }
    return ( 
    <>
        <Helmet>
            <title>Availabilities | Find the Apartment You’ve Been Searching For</title>
            <meta name="description" content='A fresh start awaits you at 2339 Nostrand. From spacious studios to large 2-bedroom units, browse our available listings below to find the luxury Brooklyn apartment that perfectly aligns with your lifestyle.' />
        </Helmet>
        <Banner data={BannerData} />
        <Table data={TableData}/>
        <QuickNav data={NavData}/>
    </> 
    );
}
 
export default Availabilities;