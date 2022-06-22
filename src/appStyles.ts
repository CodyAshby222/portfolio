import { createTheme, styled } from "@mui/material/styles";

// Themes

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#fff",
    },
    background: {
      default: "#000",
      paper: "#0D0D0D",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#000",
    },
    background: {
      default: "#fff",
      paper: "#f8fafa",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

// Text

export const WhiteText = styled("div")({
  color: "#ffffff",
  textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
});

// Postioning

export const Relative = styled("div")({
  position: "relative",
});

// FlexBox

export const Row = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export const RowCenter = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});
export const RowSpaceBetween = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const RowSpaceAround = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

// Buttons

export const WhiteButton = styled("a")({
  width: 175,
  height: 25,
  color: "#264653",
  backgroundColor: "#fff",
  fontWeight: 700,
  borderRadius: "100vh",
  border: "2px solid #fff",
  textAlign: "center",
  padding: "8px",
  cursor: "pointer",
  transition: "0.2s",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  display: "inline-block",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#eee",
  },
});

export const WhiteOutlineButton = styled("a")({
  width: 175,
  height: 25,
  color: "#fff",
  fontWeight: 700,
  border: "2px solid #fff",
  borderRadius: "100vh",
  textAlign: "center",
  padding: "8px",
  cursor: "pointer",
  transition: "0.2s",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  display: "inline-block",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#264653",
  },
});

export const OrangeButton = styled("div")({
  width: 175,
  color: "#fff",
  background: "linear-gradient(to bottom right, #F4A261, #E76F51)",
  fontWeight: 700,
  borderRadius: "100vh",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  transition: "0.2s",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  "&:hover": {
    opacity: 0.9,
  },
});

export const OrangeSubmit = styled("input")({
  width: 175,
  color: "#fff",
  background: "linear-gradient(to bottom right, #F4A261, #E76F51)",
  fontWeight: 700,
  borderRadius: "100vh",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  transition: "0.2s",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  "&:hover": {
    opacity: 0.9,
  },
});
