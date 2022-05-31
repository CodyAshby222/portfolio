import { Typography, Box, Container } from "@mui/material";
import {
  Section,
  WaveImage,
  InvertedWaveImage,
  DevIcon,
  ListIcon,
  icons,
  listStyle,
} from "./skillsStyles";
import { Row, RowCenter } from "../../appStyles";
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
              <RowCenter>
                {icons
                  ? icons.map((icon, i) => {
                      return (
                        <DevIcon
                          key={`${icon}_${i}`}
                          className={`devicon-${icon}-plain`}
                        ></DevIcon>
                      );
                    })
                  : null}
              </RowCenter>
              <Row style={listStyle}>
                <ListIcon className={`devicon-${icons[3]}-plain`}></ListIcon>
                <Typography style={{ width: 375 }}>
                  I'm a student at Neumont College of Computer Science majoring
                  in Web Development.
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon className={`devicon-${icons[3]}-plain`}></ListIcon>
                <Typography style={{ width: 375 }}>
                  I'm a student at Neumont College of Computer Science majoring
                  in Web Development.
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon className={`devicon-${icons[3]}-plain`}></ListIcon>
                <Typography style={{ width: 375 }}>
                  I'm a student at Neumont College of Computer Science majoring
                  in Web Development.
                </Typography>
              </Row>
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
