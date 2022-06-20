import { styled } from "@mui/material/styles";

export const CodeLines = styled("div")({
  height: 3,
  borderRadius: "100vh",
  transition: "1s ease",
});

export const Code = styled("div")({
  position: "absolute",
});

export const codeArray = [
  [0, 70, 65],
  [0, 55, 55],
  [0, 30, 85],
  [0, 85, 20],
  [6, 50, 70],
  [26, 50, 20],
  [35, 20, 35],
  [40, 30, 60],
  [45, 40, 15],
  [45, 15, 50],
];

export const SkillsCode = styled("div")({
  position: "absolute",
});

export const skillsCodeArray = [
  [105, 55, 35],
  [65, 50, 55],
  [30, 50, 55],
  [100, 70, 20],
  [10, 50, 70],
  [100, 60, 15],
  [30, 30, 65],
  [10, 40, 60],
  [40, 60, 75],
  [80, 55, 60],
  [30, 10, 65],
  [20, 60, 45],
  [40, 40, 25],
  [15, 15, 50],
];

export const GearGroup = styled("div")({
  opacity: 0.2,
  position: "absolute",
  top: 0,
});

export const GearOne = styled("img")({
  position: "absolute",
  animation: `spinEffect infinite 13s linear`,
  "@keyframes spinEffect": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

export const GearTwo = styled("img")({
  position: "absolute",
  animation: `otherEffect infinite 10s linear`,
  "@keyframes otherEffect": {
    from: {
      transform: "rotate(360deg)",
    },
    to: {
      transform: "rotate(0deg)",
    },
  },
});

export const GearThree = styled("img")({
  position: "absolute",
  animation: `spinEffect infinite 12s linear`,
  "@keyframes spinEffect": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});
