import { styled } from "@mui/material/styles";

export const ToggleSection = styled("div")({
  width: 50,
  height: 24,
  borderRadius: "100vh",
  position: "relative",
  backgroundColor: "#fff",
});

export const Circle = styled("div")({
  width: 20,
  height: 20,
  position: "absolute",
  top: 2,
  borderRadius: "100vh",
  backgroundColor: "#000",
  transition: "0.3s",
});
