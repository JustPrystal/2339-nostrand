import React, { useCallback, useEffect, useRef, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import mapLogo from '../assets/images/mapLogo.png';
import MapPopup from './MapPopup';

const MapContainer = ({coords, showPopup, title, flyData, setFlyData}) => {

  const mapRef = useRef(null);

  const [viewport] = useState({
    longitude: -73.9467281,
    latitude: 40.6276299,
    zoom: 14,
  });

  const resetFly = useCallback(() => {
    setFlyData((prevFlyData) => ({
      ...prevFlyData,
      condition: false,
    }));
  }, [setFlyData]);

  const fly = useCallback(() => {
    mapRef.current?.flyTo({
      center: [coords[0], coords[1]],
      duration: 2000,
      zoom: 16,
    });
  }, [coords]);

  useEffect(() => {
    if (flyData.condition) {
      fly();
      resetFly();
    }
  }, [flyData.condition, fly, resetFly]);
  
  return (
    <>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css" rel="stylesheet" />
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js"></script>
      <section class="map" id="map">
        <Map
          ref={mapRef}
          mapboxAccessToken="pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg"
          mapLib={import('mapbox-gl')}
          initialViewState={viewport}
          mapStyle="mapbox://styles/exrlandings/clww1c4jw014s01qsdgdldsg9"
        >
          <Marker longitude="-73.9467281" latitude="40.6276299" anchor="bottom">
            <img style={{width: "80px"}} src={mapLogo} alt="" />
          </Marker>  
          {
            showPopup && 
            <MapPopup coords={coords} name={title}/>
          }
        </Map>
      </section>
    </>
  );
  
}

 
export default MapContainer;