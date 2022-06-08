import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { useModeContext } from "../../hooks/useContext";
import { navLink } from "../navbar/navbarStyles";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Relative } from "../../appStyles";
import { BurgerPosition } from "./mobileMenuStyles";

const MobileMenu = () => {
  const { darkMode, setDarkMode } = useModeContext();
  const [open, setOpen] = useState(false);
  const [changeBurger, setChangeBurger] = useState(false);

  const changeHamburger = () => {
    window.scrollY >= 1 ? setChangeBurger(true) : setChangeBurger(false);
  };

  window.addEventListener("scroll", changeHamburger);

  return (
    <Relative>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <BurgerPosition>
          <Hamburger
            color={!darkMode ? "#000" : "#fff"}
            toggled={open}
            toggle={setOpen}
          />
        </BurgerPosition>
        <List style={{ display: "flex", flexDirection: "column" }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <div onClick={() => setOpen(false)}>ABOUT</div>
            {/* <Typography onClick=()>ABOUT</Typography> */}
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <div onClick={() => setOpen(false)}>SKILLS</div>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <div onClick={() => setOpen(false)}>PROJECTS</div>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <div onClick={() => setOpen(false)}>CONTACT</div>
          </Link>
        </List>
      </Drawer>
      <Hamburger
        color={changeBurger && !darkMode ? "#000" : "#fff"}
        toggled={open}
        toggle={setOpen}
      />
    </Relative>
  );
};

export default MobileMenu;
