import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "10rem 0px",
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

export const DevIcon = styled("i")({
  fontSize: "30px",
  backgroundColor: "#ffffff",
  padding: 10,
  margin: 5,
  borderRadius: "100vh",
  boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
});

export const ListIcon = styled("i")({
  fontSize: "30px",
  color: "#2A9D8F",
  // padding: 10,
  marginRight: 12,
});

export const listStyle = {
  alignItems: "center",
  margin: "30px 10px 10px 10px",
};

export const icons = [
  "html5",
  "css3",
  "javascript",
  "react",
  "angularjs",
  "nodejs",
  "graphql",
  "mongodb",
  "java",
  "python",
  "git",
  "csharp",
  "chrome",
];

export const SkillsImage = styled("img")({
  width: 450,
  margin: "1rem",
});
