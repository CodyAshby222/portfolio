import { Typography, Box, Container } from "@mui/material";
import { Section, WaveImage } from "./skillsStyles";
import { RowCenter } from "../../appStyles";
import { useModeContext } from "../../hooks/useContext";

const WhiteWave = require("../../assets/images/light/white-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");

const Skills = () => {
  const { darkMode } = useModeContext();
  return (
    <>
      <Section
        style={{ backgroundColor: `${darkMode ? "#0d0d0d" : "#f8fafa"}` }}
      >
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
        <Container sx={{ color: "text.primary" }}>
          <RowCenter style={{ alignItems: "center" }}>
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
          </RowCenter>
        </Container>
      </Section>
    </>
  );
};

export default Skills;
