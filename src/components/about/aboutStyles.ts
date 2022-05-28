import { styled } from "@mui/material/styles";

export const boxStyles = {
  color: "text.primary",
  bgcolor: "background.default",
  padding: "6rem 0px",
};

export const ProfileImage = styled("img")({
  width: 250,
  height: 250,
  margin: "2rem",
  objectFit: "cover",
  borderRadius: "100vh",
});
