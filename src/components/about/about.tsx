import { Typography, Box, Container } from "@mui/material";
import { boxStyles, ProfileImage, LightCode, DarkCode } from "./aboutStyles";
import { RowCenter } from "../../appStyles";

const ProfileImg = require("../../assets/images/profile-img.jpg");
const CodeImg = require("../../assets/images/code.png");

const About = () => {
  return (
    <>
      <Box sx={boxStyles}>
        <Container>
          <RowCenter style={{ alignItems: "center", position: "relative" }}>
            <ProfileImage src={ProfileImg} />
            <Box style={{ width: 650 }}>
              <Typography sx={{ mb: 2 }} variant="h4">
                ABOUT ME
              </Typography>
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
            <LightCode src={CodeImg} />
            <DarkCode src={CodeImg} />
          </RowCenter>
        </Container>
      </Box>
    </>
  );
};

export default About;
