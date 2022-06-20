import { styled } from "@mui/material/styles";

export const CodeLines = styled("div")({
  height: 3,
  borderRadius: "100vh",
  transition: "1s ease",
  transitionDelay: "0.5s",
  margin: "5px 3px 0px 3px",
});

export const Code = styled("div")({
  position: "absolute",
  top: 126,
  left: 268,
});

export const codeArray = [
  [0, 105, 35],
  [0, 70, 55],
  [0, 30, 105],
  [0, 90, 20],
  [12, 50, 70],
  [30, 100, 0],
  [43, 30, 65],
  [50, 10, 60],
  [50, 40, 15],
  [50, 15, 50],
];

export const SkillsCode = styled("div")({
  position: "absolute",
  top: 176,
  left: 172,
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
  top: 30,
  left: 200,
  width: 70,

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
  top: 10,
  left: 285,
  width: 40,
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
  top: 70,
  left: 300,
  width: 50,
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
