import { Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardSection = styled("div")({
  width: 500,
  height: 225,
  margin: "1rem 1.5rem",
  // border: "1px solid red",
  borderRadius: 7,
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  transition: "0.2s ease-in",
});

export const CardInfo = styled("div")({
  padding: "1rem 1rem",
  width: 235,
});

export const CardTitle = styled("div")({
  fontSize: "1.5rem",
  marginBottom: 8,
  fontWeight: 600,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const CardDescription = styled("div")({
  position: "relative",
  height: "5.75rem",
  overflow: "hidden",
  lineHeight: "1.4rem",
  margin: "0.25rem 0px",
  fontSize: "0.9rem",
  paddingRight: "5px",
  opacity: 0.8,
  "&::before": {
    content: '"..."',
    letterSpacing: "0.15rem",
    position: "absolute",
    bottom: 3,
    right: -3,
  },
});

export const DevIcon = styled("i")({
  fontSize: "30px",
  backgroundColor: "#ffffff",
  color: "#2A9D8F",
  padding: 10,
  margin: 5,
  borderRadius: "100vh",
  boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
});

// export const CardButton = styled("div")({
//   width: 125,
//   color: "#E76F51",
//   fontWeight: 700,
//   borderRadius: "100vh",
//   textAlign: "center",
//   padding: "8px",
//   fontSize: "0.8rem",
//   cursor: "pointer",
//   marginTop: "1rem",
//   border: "2px solid #E76F51",
//   "&:hover": {
//     background: "linear-gradient(to bottom right, #F4A261, #E76F51)",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//   },
// });

export const CardImg = styled("img")({
  width: 225,
  height: 225,
  borderRadius: "0px 6px 6px 0px",
});
