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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhiteWave = require("../../assets/images/light/white-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");
const LightImg = require("../../assets/images/light/skills-img.png");
const DarkImg = require("../../assets/images/dark/skills-img.png");

const Skills = () => {
  const { darkMode } = useModeContext();
  const tablet = useMediaQuery("(max-width:800px)");
  const mobile = useMediaQuery("(max-width:500px)");

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
      <Section
        id="skills"
        style={{ backgroundColor: `${darkMode ? "#0d0d0d" : "#f8fafa"}` }}
      >
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
        <Container data-aos="fade-up" sx={{ color: "text.primary" }}>
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
                  Proficient in React, JavaScript/TypeScript, CSS, HTML and
                  NodeJS.
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon
                  className={`devicon-${icons[3]}-plain colored`}
                ></ListIcon>
                <Typography style={{ width: 375 }}>
                  Expertise in problem-solving techniques and growing with
                  others.
                </Typography>
              </Row>
              <Row style={listStyle}>
                <ListIcon
                  className={`devicon-${icons[3]}-plain colored`}
                ></ListIcon>
                <Typography style={{ width: 375 }}>
                  Great communication, creativity and teamwork abilities.
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
