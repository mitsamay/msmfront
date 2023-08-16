import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { AddLocationAlt, Bed, LocationOn, Approval } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ClusterMap from "./map/ClusterMap";
import Rooms from "./rooms/Rooms";
import AddRoom from "./addRoom/AddRoom";
import Deeds from "./deeds/Deeds";
import AddDeeds from "./addDeeds/AddDeeds";
import Protected from "./protected/Protected";
import { useValue } from "../context/ContextProvider";

const BottomNav = () => {
  const {
    state: { section },
    dispatch,
  } = useValue();

  const ref = useRef();

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [section]);

  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <Rooms />,
          2: <Deeds />,
          3: (
            <Protected>
              <AddRoom />
            </Protected>
          ),
          4: <AddDeeds />,
        }[section]
      }
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          value={section}
          onChange={(e, newValue) =>
            dispatch({ type: "UPDATE_SECTION", payload: newValue })
          }
        >
          <BottomNavigationAction label="Map" icon={<LocationOn />} />
          <BottomNavigationAction label="Rooms" icon={<Bed />} />
          <BottomNavigationAction label="Deeds" icon={<Approval />} />
          <BottomNavigationAction label="Add Rooms" icon={<AddLocationAlt />} />
          <BottomNavigationAction label="Add Deeds" icon={<AddLocationAlt />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
