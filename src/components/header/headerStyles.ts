import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "8rem 0px",
  backgroundSize: "cover",
  position: "relative",
});

export const Title = styled("div")({
  fontSize: "3.5rem",
  lineHeight: 1.25,
  color: "#ffffff",
  fontWeight: 500,
  "text-shadow": "0px 0px 8px rgba(0,0,0,0.3)",
});

export const SubTitle = styled("div")({
  fontWeight: 300,
  fontSize: "1.5rem",
  color: "#ffffff",
  "text-shadow": "0px 0px 8px rgba(0,0,0,0.3)",
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
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  borderRadius: "100vh",
});

export const SocialLink = styled("a")({});
