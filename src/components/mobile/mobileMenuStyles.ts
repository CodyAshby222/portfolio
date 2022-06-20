import { styled } from "@mui/material/styles";

export const BurgerPosition = styled("div")({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 100,
});

export const MobileLink = styled("div")({
  margin: "0 auto auto",
  textDecoration: "none",
  cursor: "pointer",
  padding: "0.5rem 0",
  width: 350,
  textAlign: "center",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

export const HomeLink = styled("a")({
  margin: "0 auto auto",
  textDecoration: "none",
  cursor: "pointer",
  padding: "0.5rem 0",
  width: 350,
  textAlign: "center",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

export const linkArr = ["about", "skills", "projects", "contact"];

export const listStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "4rem",
  paddingBottom: "2rem",
};
