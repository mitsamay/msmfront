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
import { useValue } from "../context/ContextProvider";

const BottomNav = () => {
  // const [value, setValue] = useState(0);
  const {
    state: { section },
    dispatch,
  } = useValue();

  const ref = useRef();

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    // }, [value]);
  }, [section]);

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
              {/* <AddRoom setPage={setValue} /> */}
              <AddRoom />
            </Protected>
          ),
          4: <AddDeeds />,
          // }[value]
        }[section]
      }
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          // value={value}
          value={section}
          // onChange={(e, newValue) => setValue(newValue)}
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
