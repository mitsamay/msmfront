import React from "react";
import { Grid, Button, ButtonGroup, Tooltip } from "@mui/material";
// import MapIcon from "@mui/icons-material/Map";
// import SatelliteIcon from "@mui/icons-material/Satellite";
import TimelineIcon from "@mui/icons-material/Timeline";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import UndoSharpIcon from "@mui/icons-material/UndoSharp";
import AdsClickSharpIcon from "@mui/icons-material/AdsClickSharp";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import FolderSpecialTwoToneIcon from '@mui/icons-material/FolderSpecialTwoTone';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
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
        <Grid container my={2}>
          <ThemeProvider theme={theme}>
            <ButtonGroup
              sx={{ m: 1 }}
              variant="contained"
              orientation="vertical"
              size="small"
              color="secondary"
              aria-label="Basemap button group"
            >
              <Tooltip
                title="ເພີ້ມ+ແກ້ໄຂ Edit"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Line" sx={{ borderRadius: "10%" }}>
                  <EditTwoToneIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ແຕ້ມເສັ້ນ Line"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Line" sx={{ borderRadius: "10%" }}>
                  <TimelineIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ແຕ້ມຮູບປິດ Polygon"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Polygon" sx={{ borderRadius: "10%" }}>
                  <HexagonOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ແຕ້ມຈຸດ Point"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Point" sx={{ borderRadius: "10%" }}>
                  <GpsFixedOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="Snapping"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Point" sx={{ borderRadius: "10%" }}>
                  <AdsClickSharpIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ນໍາເຂົ້າຂໍ້ມູນ File Import"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Point" sx={{ borderRadius: "10%" }}>
                  <FolderSpecialTwoToneIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ເຮັດຍ້ອນຄືນ Undo"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button
                  aria-label="Scale and Rotate"
                  sx={{ borderRadius: "10%" }}
                >
                  <UndoSharpIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ຫຍໍ້+ຂະຫຍາຍ+ໝູນ Scale and Rotate"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button
                  aria-label="Scale and Rotate"
                  sx={{ borderRadius: "10%" }}
                >
                  <RotateLeftOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ເລີ້ມໃໝ່ Start Over"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="Start Over" sx={{ borderRadius: "10%" }}>
                  <LoopOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip
                title="ເມນູເພີ້ມເຕີມ More Menu"
                placement="right"
                arrow
                enterDelay={500}
                leaveDelay={200}
              >
                <Button aria-label="More Menu" sx={{ borderRadius: "10%" }}>
                  <HandymanOutlinedIcon />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </ThemeProvider>
        </Grid>
        <NavigationControl position="bottom-left" />
        <GeolocateControl position="bottom-left" />
        <FullscreenControl position="bottom-right" />
        <ScaleControl position="bottom-right" />
      </ReactMapGL>
    </>
  );
};

export default GisMap;
