import { styled } from "@mui/material/styles";

export const boxStyles = {
  color: "text.primary",
  bgcolor: "background.default",
  padding: "7rem 0px",
};

export const ProfileImage = styled("img")({
  width: 250,
  height: 250,
  margin: "2rem",
  objectFit: "cover",
  borderRadius: "100vh",
  boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
});

export const LightCode = styled("img")({
  width: 450,
  opacity: 0.04,
  position: "absolute",
  right: "20%",
  top: -60,
});

export const DarkCode = styled("img")({
  width: 450,
  WebkitFilter: "invert(100%)",
  filter: "invert(100%)",
  opacity: 0.06,
  position: "absolute",
  right: "20%",
  top: -60,
});
