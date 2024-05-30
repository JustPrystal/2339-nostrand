import Table from '../components/Table';
import Banner from "../components/Banner";
import BannerImage from "../assets/images/Neighborhood/banner3.jpg";

const Availabilities = () => {
    let TableData = [
        {
            residence : "4B",
            type : "1 Bed",
            bedBath : "1 Bed | 2 Bath + Home Office",
            outdoor : "Balcony",
            price : "2,337.50",
            tour3d : "View",
            tour3dLink : "https://my.matterport.com/show/?m=Ppadxy5T58b",
            floorPlan : ""
        },
        {
            residence : "5B",
            type : "1 Bed",
            bedBath : "1 Bed | 2 Bath + Home Office",
            outdoor : "Balcony",
            price : "3,250.00",
            tour3d : "View",
            tour3dLink : "https://my.matterport.com/show/?m=Ppadxy5T58b",
            floorPlan : BannerImage
        },
        {
            residence : "6B",
            type : "1 Bed",
            bedBath : "1 Bed | 2 Bath + Home Office",
            outdoor : "Balcony",
            price : "3,275.00",
            tour3d : "View",
            tour3dLink : "https://my.matterport.com/show/?m=Ppadxy5T58b",
            floorPlan : ""
        },
    ]
    let BannerData = {
        backgroundImage : BannerImage,
        heading : "Availabilities",
        subHeading : "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint nemo odio officiis cumque fuga accusantium"
    }
    return ( 
    <>
        <Banner data={BannerData} />
        <Table data={TableData}/>
    </> 
    );
}
 
export default Availabilities;