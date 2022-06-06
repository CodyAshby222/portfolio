import { styled } from "@mui/material/styles";

export const CardSection = styled("div")({
  height: 350,
  width: 300,
  borderRadius: 7,
  margin: "1rem",
  transition: "background 0.8s",
  overflow: "hidden",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.4)",
  position: "relative",
  backgroundPosition: "center",
  backgroundSize: 300,
  color: "#fff",
  "&:hover": {
    backgroundPosition: "left",
    backgroundSize: 415,
  },
});

export const CardTitle = styled("div")({
  fontSize: "1.25rem",
  margin: "1rem 1.5rem",
  fontWeight: 600,
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
