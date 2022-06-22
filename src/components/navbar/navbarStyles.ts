import { styled } from "@mui/material/styles";

export const Nav = styled("div")({
  width: "100%",
  position: "fixed",
  zIndex: 10,
  transition: "0.2s",
});

export const NavGroup = styled("div")({
  display: "flex",
  alignItems: "center",
  height: 75,
});

export const HomeLink = styled("a")({
  textDecoration: "none",
  marginRight: "2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const navLink = {
  textDecoration: "none",
  marginRight: "2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

export const linkArr = ["about", "skills", "projects"];
