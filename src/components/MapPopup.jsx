import { Popup } from "react-map-gl";

const MapPopup = ({coords, name}) => {
    let longitude = coords[0]
    let latitude = coords[1]
    return ( <Popup
        longitude={longitude}
        latitude={latitude}
        // onClose={closePopup}
        closeButton={false}
        closeOnClick={false}
        offsetTop={-30}
        >
        <p className="map-popup">{name}</p>
      </Popup> );
}
 
export default MapPopup;