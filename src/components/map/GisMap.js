import React, { useState } from "react";
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
// import MapboxDraw from "@mapbox/mapbox-gl-draw";
// import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

const GisMap = () => {
  return (
    // <div>GisMap ກໍາລັງດໍາເນີນການສ້າງ</div>
    <ReactMapGL
      initialViewState={{ latitude: 18.099, longitude: 102.669, zoom: 5 }}
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </ReactMapGL>
  );
};

export default GisMap;
