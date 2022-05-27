import { styled } from "@mui/material/styles";
const HeaderBg = require("../../assets/images/header-bg.jpg");

export const Section = styled("div")({
  padding: "8rem 0px",
  background: `url(${HeaderBg}) no-repeat center center fixed`,
  backgroundSize: "cover",
  position: "relative",
});

export const Title = styled("div")({
  fontSize: "3.5rem",
  lineHeight: 1.25,
  color: "#ffffff",
  fontWeight: 500,
});

export const SubTitle = styled("div")({
  fontWeight: 300,
  fontSize: "1.5rem",
  color: "#ffffff",
});

export const HomeHeaderBox = styled("div")({
  width: 500,
  margin: "2rem 1rem",
});

export const HomeHeaderImage = styled("img")({
  width: 500,
  margin: "2rem 1rem",
});

export const WaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  bottom: -3,
});

export const SocialImage = styled("img")({
  width: 35,
  marginRight: 10,
});

export const SocialLink = styled("a")({});
