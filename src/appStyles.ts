import { createTheme, styled } from "@mui/material/styles";

const DarkTheme = createTheme({
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

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F4A261",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const WhiteText = styled("div")({
  color: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
});

const Row = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

const RowCenter = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});
const RowSpaceBetween = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

const RowSpaceAround = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

export {
  DarkTheme,
  LightTheme,
  WhiteText,
  Row,
  RowCenter,
  RowSpaceBetween,
  RowSpaceAround,
};
