import { Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardSection = styled("div")({
  width: 500,
  height: 225,
  margin: 10,
  border: "1px solid red",
  borderRadius: 7,
  backgroundColor: "#fff",
  color: "#000",
});

export const CardInfo = styled("div")({
  border: "1px solid red",
  padding: "1.5rem 1rem",
  width: 235,
});

export const CardTitle = styled("div")({
  fontSize: "1.25rem",
  fontWeight: 600,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const CardDescription = styled("div")({
  position: "relative",
  height: "4.5rem",
  overflow: "hidden",
  margin: "0.5rem 0px",
  "&::before": {
    content: '"..."',
    letterSpacing: "0.15rem",
    position: "absolute",
    bottom: -3,
    right: 0,
  },
});

export const CardButton = styled("div")({
  width: 175,
  color: "#218074",
  backgroundColor: "#aaa",
  fontWeight: 700,
  borderRadius: "100vh",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
});
export const CardImg = styled("img")({
  width: 225,
  borderRadius: "0px 7px 7px 0px",
});
