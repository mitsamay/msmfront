import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const GisMap = () => {
  const [zoom, setZoom] = useState(0);
  return (
    // <div>GisMap ກໍາລັງດໍາເນີນການສ້າງ</div>
    <ReactMapGL
      initialViewState={{ latitude: 18.099, longitude: 102.669, zoom: 5 }}
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      //   zoom={4}
      onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
    ></ReactMapGL>
  );
};

export default GisMap;
