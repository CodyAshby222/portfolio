import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import {
  Section,
  WaveImage,
  SkillsImage,
  InvertedWaveImage,
  DevIcon,
  ListIcon,
  icons,
  listStyle,
} from "./skillsStyles";
import { Row, RowCenter, RowSpaceAround, Relative } from "../../appStyles";
import { useModeContext } from "../../hooks/useContext";
import { GearAnimation, SkillsAnimation } from "../animations/animation";

const WhiteWave = require("../../assets/images/light/white-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");
const LightImg = require("../../assets/images/light/skills-img.png");
const DarkImg = require("../../assets/images/dark/skills-img.png");

const Skills = () => {
  const { darkMode } = useModeContext();
  const tablet = useMediaQuery("(max-width:800px)");
  const mobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <Section
        id="skills"
        style={{ backgroundColor: `${darkMode ? "#0d0d0d" : "#f8fafa"}` }}
      >
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
        <Container sx={{ color: "text.primary" }}>
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            SKILLS
          </Typography>

          <RowSpaceAround
            style={{
              alignItems: "center",
              textAlign: mobile ? "center" : "left",
            }}
          >
            <Box style={{ width: mobile ? 350 : 450, margin: "1rem" }}>
              <RowCenter>
                {icons
                  ? icons.map((icon, i) => {
                      return (
                        <DevIcon
                          key={`${icon}_${i}`}
                          className={`devicon-${icon}-plain colored`}
                        ></DevIcon>
                      );
                    })
                  : null}
              </RowCenter>
              <Row style={listStyle}>
                <ListIcon
                  className={`devicon-${icons[3]}-plain colored`}
                ></ListIcon>
                <Typography style={{ width: 375 }}>
                  Proficient skills in React, JavaScript/TypeScript, CSS, HTML
                  and more!
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon
                  className={`devicon-${icons[3]}-plain colored`}
                ></ListIcon>
                <Typography style={{ width: 375 }}>
                  Strong problem-solving techniques and a huge growth mindset.
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon
                  className={`devicon-${icons[3]}-plain colored`}
                ></ListIcon>
                <Typography style={{ width: 375 }}>
                  Excellent communication and teamwork skills with a keen eye
                  for responsive web design.
                </Typography>
              </Row>
            </Box>
            <Relative>
              <SkillsImage
                style={{ width: tablet ? 325 : 450 }}
                src={darkMode ? DarkImg : LightImg}
              />
              <SkillsAnimation />
              <GearAnimation />
            </Relative>
          </RowSpaceAround>
        </Container>
        <InvertedWaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

export default Skills;
