import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useModeContext } from "../../hooks/useContext";
import { navLink } from "../navbar/navbarStyles";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const { darkMode, setDarkMode } = useModeContext();
  const [open, setOpen] = useState(false);
  const [changeBurger, setChangeBurger] = useState(false);

  const changeHamburger = () => {
    window.scrollY >= 1 ? setChangeBurger(true) : setChangeBurger(false);
  };

  window.addEventListener("scroll", changeHamburger);

  return (
    <>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List style={{ width: 320, display: "flex", flexDirection: "column" }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            ABOUT
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            SKILLS
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </List>
        <Hamburger
          color={!darkMode ? "#000" : "#fff"}
          toggled={open}
          toggle={setOpen}
        />
      </Drawer>
      <Hamburger
        color={changeBurger && !darkMode ? "#000" : "#fff"}
        toggled={open}
        toggle={setOpen}
      />
    </>
  );
};

export default MobileMenu;
