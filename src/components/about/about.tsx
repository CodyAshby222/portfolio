import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import { boxStyles, ProfileImage, LightCode, DarkCode } from "./aboutStyles";
import { RowCenter } from "../../appStyles";

const ProfileImg = require("../../assets/images/profile-img.jpg");
const CodeImg = require("../../assets/images/code.png");

const About = () => {
  const tablet = useMediaQuery("(max-width:1035px)");
  return (
    <>
      <Box id="about" sx={boxStyles}>
        <Container>
          <RowCenter style={{ alignItems: "center", position: "relative" }}>
            <ProfileImage src={ProfileImg} />
            <Box style={{ width: 650 }}>
              <Typography
                style={{
                  marginBottom: "1rem",
                  textAlign: !tablet ? "left" : "center",
                }}
                variant="h4"
              >
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
            {!tablet ? (
              <>
                <LightCode src={CodeImg} />
                <DarkCode src={CodeImg} />
              </>
            ) : null}
          </RowCenter>
        </Container>
      </Box>
    </>
  );
};

export default About;
