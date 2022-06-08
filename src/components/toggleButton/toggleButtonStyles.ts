import { styled } from "@mui/material/styles";

export const ToggleSection = styled("div")({
  width: 50,
  height: 24,
  borderRadius: "100vh",
  position: "relative",
  marginLeft: "2rem",
  cursor: "pointer",
});

export const Circle = styled("div")({
  width: 18,
  height: 18,
  position: "absolute",
  top: 3,
  borderRadius: "100vh",
  transition: "0.3s",
});
