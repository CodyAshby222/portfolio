import React, { useState } from "react";
import { Drawer, List } from "@mui/material";
import { useModeContext } from "../../hooks/useContext";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { Relative } from "../../appStyles";
import { useLocation } from "react-router-dom";
import {
  BurgerPosition,
  MobileLink,
  listStyle,
  HomeLink,
} from "./mobileMenuStyles";
import ToggleButton from "../toggleButton/toggleButton";
import HomeIcon from "@mui/icons-material/Home";

const MobileMenu = () => {
  const { darkMode } = useModeContext();
  const [open, setOpen] = useState(false);
  const [changeBurger, setChangeBurger] = useState(false);
  const location = useLocation();

  const changeHamburger = () => {
    window.scrollY >= 1 ? setChangeBurger(true) : setChangeBurger(false);
  };

  window.addEventListener("scroll", changeHamburger);

  return (
    <Relative>
      <Drawer
        sx={{ backgroundImage: "none", color: "#000" }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <BurgerPosition>
          <Hamburger
            color={!darkMode ? "#000" : "#fff"}
            toggled={open}
            toggle={setOpen}
          />
        </BurgerPosition>
        {/* @ts-ignore */}

        <List style={listStyle}>
          {location.pathname === "/" ? (
            <>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MobileLink
                  style={{
                    borderBottom: darkMode
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "1px solid rgba(0,0,0,0.2)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  ABOUT
                </MobileLink>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MobileLink
                  style={{
                    borderBottom: darkMode
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "1px solid rgba(0,0,0,0.2)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  SKILLS
                </MobileLink>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MobileLink
                  style={{
                    borderBottom: darkMode
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "1px solid rgba(0,0,0,0.2)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  PROJECTS
                </MobileLink>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <MobileLink
                  style={{
                    borderBottom: darkMode
                      ? "1px solid rgba(255,255,255,0.3)"
                      : "1px solid rgba(0,0,0,0.2)",
                    marginBottom: "1.25rem",
                  }}
                  onClick={() => setOpen(false)}
                >
                  CONTACT
                </MobileLink>
              </Link>
            </>
          ) : (
            <HomeLink href="/">
              <HomeIcon
                style={{
                  fontSize: "2rem",
                  color: !darkMode ? "#000" : "#fff",
                }}
              />
            </HomeLink>
          )}
          <ToggleButton />
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
