import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { navLink } from "../navbar/navbarStyles";
import Hamburger from "hamburger-react";
import { Link, animateScroll as scroll } from "react-scroll";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
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
      </Drawer>
      <Hamburger toggled={open} toggle={setOpen} />
    </>
  );
};

export default MobileMenu;
