import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import { boxStyles, ProfileImage, LightCode, DarkCode } from "./aboutStyles";
import { RowCenter } from "../../appStyles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileImg = require("../../assets/images/profile-img.jpg");
const CodeImg = require("../../assets/images/code.png");

const About = () => {
  const tablet = useMediaQuery("(max-width:1035px)");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box id="about" sx={boxStyles}>
        <Container>
          <RowCenter
            data-aos="fade-up"
            style={{ alignItems: "center", position: "relative" }}
          >
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
                I'm a senior at Neumont College of Computer Science majoring in
                Web Design and Development. My interest in development started
                years ago with a friend showing me code and I developed a
                passion for it ever since.
              </Typography>
              <Typography>
                I've learned many skills and my goal is to continue my journey
                as a front-end developer and continue to strengthen my skills
                with various libraries and frameworks like React, Angular,
                NodeJS and more.
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
