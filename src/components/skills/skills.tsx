import { Typography, Box, Container } from "@mui/material";
import { Section, WaveImage, InvertedWaveImage } from "./skillsStyles";
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
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            SKILLS
          </Typography>
          <RowCenter style={{ alignItems: "center" }}>
            <Box style={{ width: 450 }}>
              <Typography sx={{ mb: 2 }}>Images</Typography>
              <Typography>List</Typography>
            </Box>
            <Box style={{ width: 450 }}>
              <Typography sx={{ mb: 2 }}>Image</Typography>
            </Box>
          </RowCenter>
        </Container>
        <InvertedWaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

export default Skills;
