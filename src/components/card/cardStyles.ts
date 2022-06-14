import { styled } from "@mui/material/styles";

export const CardSection = styled("div")({
  height: 350,
  width: 300,
  borderRadius: 7,
  margin: "1rem",
  transition: "background 0.8s",
  overflow: "hidden",
  position: "relative",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: 250,
  color: "#fff",
  "&:hover": {
    // backgroundPosition: "bottom",
    backgroundSize: 190,
  },
});

export const CardTitle = styled("div")({
  fontSize: "1.25rem",
  margin: "1rem 1.5rem 0px 1.5rem",
  fontWeight: 500,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  transition: "0.8s",
});

export const CardSubtitle = styled("div")({
  fontSize: "0.8rem",
  margin: "0px 1.5rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  transition: "0.8s",
});

export const DevIcon = styled("i")({
  fontSize: "22px",
  color: "#fff",
  margin: 5,
  borderRadius: "100vh",
});

export const DevGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 15,
  transition: "0.8s",
});
