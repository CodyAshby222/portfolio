import { styled } from "@mui/material/styles";

export const Nav = styled("div")({
  width: "100%",
  border: "1px solid red",
  position: "fixed",
  zIndex: 10,
});

export const NavGroup = styled("div")({
  display: "flex",
  alignItems: "center",
  height: 70,
});

export const navLink = {
  textDecoration: "none",
  color: "#fff",
  marginLeft: "2rem",
};
