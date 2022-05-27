import { createTheme, styled } from "@mui/material/styles";

// Themes

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
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

export const WhiteButton = styled("div")({
  width: 175,
  color: "#218074",
  backgroundColor: "#fff",
  fontWeight: 700,
  borderRadius: "100vh",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
});

export const OrangeButton = styled("div")({
  width: 200,
});
