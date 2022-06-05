import { Typography, Box, Container } from "@mui/material";
import { boxStyles } from "./projectDisplayStyles";
import { RowCenter } from "../../appStyles";

const ProjectDisplay = ({ title, desc, img }) => {
  return (
    <>
      <Box sx={boxStyles}>
        <Container maxWidth="md">
          <Typography
            style={{ marginBottom: "1rem", textAlign: "center" }}
            variant="h4"
          >
            WHAT IS {title.toUpperCase()}?
          </Typography>
          <Typography sx={{ mb: 2 }}>{desc}</Typography>
          <Typography sx={{ mb: 2 }}>IMAGES</Typography>
        </Container>
      </Box>
    </>
  );
};

export default ProjectDisplay;
