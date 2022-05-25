import { useModeContext } from "../../hooks/useContext";
import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
} from "@mui/material";
import MobileMenu from "../mobile/mobileMenu";
import { RowSpaceAround, RowSpaceBetween } from "../../appStyles";
import { Nav } from "./navbarStyles";

const Navbar = () => {
  const { darkMode, setDarkMode } = useModeContext();
  return (
    <>
      <Nav>
        <RowSpaceAround>
          <Typography>Navbar</Typography>
          <Typography onClick={() => setDarkMode(!darkMode)}>
            Dark Light Toggle
          </Typography>
          <MobileMenu />
        </RowSpaceAround>
      </Nav>
    </>
  );
};

export default Navbar;
