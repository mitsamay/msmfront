import React from "react";
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const GisMap = () => {
  return (
    <>
    <ReactMapGL
      initialViewState={{ latitude: 18.099, longitude: 103.669, zoom: 5 }}
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <useControl />
      <ScaleControl />
    </ReactMapGL>
    </>
  );
};

export default GisMap;
