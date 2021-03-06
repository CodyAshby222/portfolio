import { styled } from "@mui/material/styles";

export const Section = styled("div")({
  padding: "9rem 0px 5rem 0px",
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

export const WaveImage = styled("img")({
  width: "100%",
  position: "absolute",
  top: -3,
  transform: "scaleY(-1)",
});

export const SocialImage = styled("img")({
  width: 35,
  marginRight: 5,
  marginLeft: 5,
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  borderRadius: "100vh",
  "&:hover": {
    opacity: 0.9,
  },
});

export const SocialLink = styled("a")({});
