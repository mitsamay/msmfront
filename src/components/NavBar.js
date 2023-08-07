import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Lock, Menu } from "@mui/icons-material";
import photoURL from "../profile.png";
import UserIcons from "./user/UserIcons";
import { useValue } from "../context/ContextProvider";

const user = { name: "test", photoURL };

// import Sidebar from './sidebar/Sidebar';

const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  //   const [isOpen, setIsOpen] = useState(false);

  return (
    // <>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton
              size="large"
              color="inherit"
              // onClick={() => setIsOpen(true)}
            >
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Mitsamay System
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MSM
          </Typography>
          {!currentUser ? (
            <Button
              color="inherit"
              startIcon={<Lock />}
              // onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
              onClick={() => dispatch({ type: "UPDATE_USER", payload: user })}
            >
              Login
            </Button>
          ) : (
            <UserIcons />
          )}
        </Toolbar>
      </Container>
    </AppBar>
    //   {/* <Toolbar /> */}
    //   {/* <Sidebar {...{ isOpen, setIsOpen }} /> */}
    // </>
  );
};

export default NavBar;
