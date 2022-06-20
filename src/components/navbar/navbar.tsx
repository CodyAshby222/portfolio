import { useModeContext } from "../../hooks/useContext";
import { useState } from "react";
import { Typography, Container, useMediaQuery } from "@mui/material";
import MobileMenu from "../mobile/mobileMenu";
import { RowSpaceBetween } from "../../appStyles";
import { Nav, NavGroup, navLink, linkArr, HomeLink } from "./navbarStyles";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import ToggleButton from "../toggleButton/toggleButton";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const { darkMode } = useModeContext();
  const tablet = useMediaQuery("(max-width:800px)");
  const location = useLocation();
  const [changeNav, setChangeNav] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 1 ? setChangeNav(true) : setChangeNav(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Nav
        style={{
          backgroundColor:
            changeNav && darkMode ? "#000" : changeNav ? "#fff" : "",
          boxShadow:
            changeNav && darkMode
              ? "0px 0px 8px rgba(255,255,255, 0.2)"
              : changeNav
              ? "0px 0px 8px rgba(0,0,0, 0.2)"
              : "",
        }}
      >
        <Container maxWidth="lg">
          <RowSpaceBetween>
            <NavGroup></NavGroup>
            <NavGroup>
              {tablet ? (
                <MobileMenu />
              ) : (
                <>
                  {location.pathname === "/" ? (
                    <>
                      {linkArr.map((link, i) => {
                        return (
                          <Link
                            key={`${link}_${i}`}
                            style={navLink}
                            to={link}
                            smooth={true}
                            offset={-50}
                            duration={500}
                          >
                            <Typography
                              style={{
                                color: changeNav && !darkMode ? "#000" : "#fff",
                              }}
                            >
                              {link.toUpperCase()}
                            </Typography>
                          </Link>
                        );
                      })}
                      {/* Contact Link Here - Modal Popup */}
                    </>
                  ) : (
                    <HomeLink href="/">
                      <HomeIcon
                        style={{
                          fontSize: "2rem",
                          marginRight: "-1rem",
                          color: changeNav && !darkMode ? "#000" : "#fff",
                        }}
                      />
                    </HomeLink>
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
