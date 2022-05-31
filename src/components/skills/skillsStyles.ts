import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "8rem 0px",
  position: "relative",
});

export const WaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  top: -3,
  transform: "rotate(180deg)",
});

export const InvertedWaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  bottom: -3,
  transform: "scaleX(-1)",
});
