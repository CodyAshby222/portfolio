import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  backgroundSize: "cover",
  position: "relative",
});

export const Title = styled("div")({
  fontSize: "3.5rem",
  lineHeight: 1.25,
  color: "#ffffff",
  fontWeight: 500,
  textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
});

export const SubTitle = styled("div")({
  fontWeight: 300,
  fontSize: "1.5rem",
  color: "#ffffff",
  textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
});

export const HomeHeaderBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "2rem 1rem",
});

export const HomeHeaderImage = styled("img")({
  margin: "2rem 1rem",
});

export const ProjectHeaderBox = styled("div")({
  width: 650,
  margin: "2rem 1rem",
});

export const WaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  bottom: -3,
});

export const InvertedWaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  bottom: -3,
  transform: "scaleX(-1)",
});

export const SocialImage = styled("img")({
  width: 35,
  marginRight: 10,
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  borderRadius: "100vh",
  "&:hover": {
    opacity: 0.9,
  },
});

export const SocialLink = styled("a")({});
