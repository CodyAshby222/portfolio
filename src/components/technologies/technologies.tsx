import { Typography, Container } from "@mui/material";
import { Section, WaveImage } from "./technologyStyles";
import { RowSpaceAround } from "../../appStyles";
import { useModeContext } from "../../hooks/useContext";

const WhiteWave = require("../../assets/images/light/white-wave.jpg");
const BlackWave = require("../../assets/images/dark/black-wave.jpg");
const LightImg = require("../../assets/images/light/skills-img.png");
const DarkImg = require("../../assets/images/dark/skills-img.png");

const Technologies = ({ techUsed }) => {
  const { darkMode } = useModeContext();
  return (
    <>
      <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      <Section
        style={{ backgroundColor: `${darkMode ? "#0d0d0d" : "#f8fafa"}` }}
      >
        <Container sx={{ color: "text.primary" }}>
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            TECHNOLOGIES
          </Typography>

          <RowSpaceAround style={{ alignItems: "center" }}>
            {techUsed
              ? techUsed.map((tech, i) => {
                  return (
                    <div key={`${tech}_${i}`}>
                      <div>{tech}</div>
                    </div>
                  );
                })
              : null}
          </RowSpaceAround>
        </Container>
      </Section>
    </>
  );
};

export default Technologies;
