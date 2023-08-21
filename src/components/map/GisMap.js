import React from "react";
// import "./GisMap.css";
import { Stack, Button, ButtonGroup, Tooltip } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});

const GisMap = () => {
  return (
    <>
      <ReactMapGL
        initialViewState={{ latitude: 18.099, longitude: 103.669, zoom: 5 }}
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      >
        <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="Basemap button group"
          >
            <Tooltip title="ແຜນທີ່ TOPO" placement="right">
            <Button aria-label="TOPO">
              <MapIcon />
            </Button>
            </Tooltip>
            <Tooltip title="ພາບຖ່າຍດາວທຽມ" placement="right">
            <Button aria-label="Basemap button group">
              <SatelliteIcon />
            </Button>
            </Tooltip>
          </ButtonGroup>
        </Stack>
        </ThemeProvider>

        <GeolocateControl position="top-right" />
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl position="bottom-right" />
      </ReactMapGL>
    </>
  );
};

export default GisMap;
