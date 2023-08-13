import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { AddLocationAlt, Approval, Bed, LocationOn } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ClusterMap from "./map/ClusterMap";
import Rooms from "./rooms/Rooms";
import AddRoom from "./addRoom/AddRoom";
import Deeds from "./deeds/Deeds";
import AddDeeds from "./addDeeds/AddDeeds";
import Protected from "./protected/Protected";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <Rooms />,
          // 2: (
          //   <Protected>
          //     <AddRoom setPage={setValue} />
          //   </Protected>
          // ),
          2: <Deeds />,
          3: (
            <Protected>
              <AddRoom setPage={setValue} />
            </Protected>
          ),
          4: <AddDeeds />,
        }[value]
      }
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
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
