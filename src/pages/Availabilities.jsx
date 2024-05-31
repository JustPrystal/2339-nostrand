import Table from '../components/Table';
import Banner from "../components/Banner";
import BannerImage from "../assets/images/Availabilities/banner4.jpg";
import { Helmet } from 'react-helmet';

const Availabilities = () => {
    let TableData = [
        [
            {
                residence : "1D",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "0.00",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "2A",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "0.00",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "4E",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "0.00",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "6J",
                type : "1-bed",
                bedBath : "1 Bed | 1 Bath",
                outdoor : "",
                price : "0.00",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            
        ],
        [
            {
                residence : "1A",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "2,337.50",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "3C",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "2,337.50",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "5H",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "2,337.50",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            {
                residence : "6C",
                type : "2-bed",
                bedBath : "2 Bed | 2 Bath",
                outdoor : "",
                price : "2,337.50",
                tour3d : "Coming Soon",
                tour3dLink : "",
                floorPlan : ""
            },
            
        ]
    ]
    let BannerData = {
        backgroundImage : BannerImage,
        heading : "Availabilities",
        subHeading : "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint nemo odio officiis cumque fuga accusantium"
    }
    return ( 
    <>
        <Helmet>
            <title>Availabilities | 2339 Nostrand Avenue in Flatbush, Brooklyn</title>
            <meta name="description" content='TEXT HERE' />
        </Helmet>
        <Banner data={BannerData} />
        <Table data={TableData}/>
    </> 
    );
}
 
export default Availabilities;