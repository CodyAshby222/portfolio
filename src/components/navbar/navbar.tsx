import { useModeContext } from "../../hooks/useContext";
import * as React from "react";
import { Typography, Container } from "@mui/material";
import MobileMenu from "../mobile/mobileMenu";
import { RowSpaceBetween } from "../../appStyles";
import { Nav } from "./navbarStyles";

const Navbar = () => {
  const { darkMode, setDarkMode } = useModeContext();
  return (
    <>
      <Nav>
        <Container maxWidth="lg">
          <RowSpaceBetween>
            <Typography>Navbar</Typography>
            <Typography onClick={() => setDarkMode(!darkMode)}>
              Dark Light Toggle
            </Typography>
            <MobileMenu />
          </RowSpaceBetween>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
