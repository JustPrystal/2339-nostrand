const MapLegend = ({data, setPoi, setShowPopup, setPoiTitle, setFlyData, flyData}) => {
    const setPoiCoords = (coords) => {
        setPoi(coords)
    }
    const setFly = (name) => {
        setFlyData({
            condition : flyData.point.name === name ? false : true,
            point: {name},
        })
    }
    const setTitle = (name) => {
        setPoiTitle(name)
    }
    const showPopup = () => {
        setShowPopup(true)
    }
    return ( 
        <section className="maplegend">
            <div className="inner">
                {
                    data.map((legendItem, index) => {
                        return(
                            <div className="content-wrap" key={index}>

                                <div className="heading"> <h2>{legendItem.heading}</h2> </div>
                                <div className="content"> 
                                    {
                                        legendItem.list.map((listItem, itemIndex)=>{
                                            return (
                                                <p className="list-item" key={itemIndex} 
                                                    onClick={
                                                        () => {
                                                            console.log("sasa")
                                                            setPoiCoords(listItem.coords);
                                                            setTitle(listItem.place);
                                                            showPopup();
                                                            setFly(listItem.place)
                                                            const mapElement = document.getElementById("map");
                                                            const topOffset = mapElement.getBoundingClientRect().top + window.scrollY;
                                                            window.scrollTo({
                                                                top: topOffset,
                                                                behavior: "smooth" // Optionally, use smooth scrolling
                                                            });
                                                        }
                                                    }>
                                                    {listItem.place}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    );
}
 
export default MapLegend;