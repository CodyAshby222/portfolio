import { Typography, Box, Container } from "@mui/material";
import { boxStyles } from "./projectSectionStyles";
import { RowCenter } from "../../appStyles";

const ProfileImg = require("../../assets/images/profile-img.jpg");

const ProjectSection = () => {
  return (
    <>
      <Box sx={boxStyles}>
        <Container>
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            PROJECTS
          </Typography>
          <RowCenter style={{ alignItems: "center" }}>
            <Box style={{ width: 500 }}>
              <Typography sx={{ mb: 2 }}>
                I'm a student at Neumont College of Computer Science majoring in
                Web Design and Development. My interest in development started
                years ago with a couple of friends showing me some fundamentals
                of code and I developed a passion ever since.
              </Typography>
              <Typography>
                I've learned a lot since then and I want to continue my journey
                as a web developer and hone my skills with varieties of
                libraries and frameworks like React, Angular, NodeJS, and many
                more.
              </Typography>
            </Box>
            <Box style={{ width: 500 }}>
              <Typography sx={{ mb: 2 }}>
                I'm a student at Neumont College of Computer Science majoring in
                Web Design and Development. My interest in development started
                years ago with a couple of friends showing me some fundamentals
                of code and I developed a passion ever since.
              </Typography>
              <Typography>
                I've learned a lot since then and I want to continue my journey
                as a web developer and hone my skills with varieties of
                libraries and frameworks like React, Angular, NodeJS, and many
                more.
              </Typography>
            </Box>
          </RowCenter>
        </Container>
      </Box>
    </>
  );
};

export default ProjectSection;
