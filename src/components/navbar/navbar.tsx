import { useModeContext } from "../../hooks/useContext";
import { useEffect } from "react";
import { Typography, Container, useMediaQuery } from "@mui/material";
import MobileMenu from "../mobile/mobileMenu";
import { RowSpaceBetween } from "../../appStyles";
import { Nav, NavGroup, navLink } from "./navbarStyles";
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import ToggleButton from "../toggleButton/toggleButton";

const Navbar = () => {
  const { darkMode, setDarkMode } = useModeContext();
  const mobile = useMediaQuery("(max-width:800px)");
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Nav>
        <Container maxWidth="lg">
          <RowSpaceBetween>
            <NavGroup></NavGroup>
            <NavGroup>
              {mobile ? (
                <MobileMenu />
              ) : (
                <>
                  {location.pathname === "/" ? (
                    <>
                      <Link
                        to="about"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        ABOUT
                      </Link>
                      <Link
                        to="skills"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        SKILLS
                      </Link>
                      <Link
                        to="projects"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        PROJECTS
                      </Link>
                      <Link
                        to="about"
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        CONTACT
                      </Link>
                    </>
                  ) : (
                    <a href="/">HOME</a>
                  )}
                  <ToggleButton />
                </>
              )}
            </NavGroup>
          </RowSpaceBetween>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
