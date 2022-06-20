import { Typography, Container } from "@mui/material";
import { Section, WaveImage, DevIcon, TechTitle } from "./technologyStyles";
import { Row, RowCenter } from "../../appStyles";
import { useModeContext } from "../../hooks/useContext";

const WhiteWave = require("../../assets/images/light/white-wave.jpg");
const BlackWave = require("../../assets/images/dark/black-wave.jpg");

const Technologies = ({ techUsed }) => {
  const { darkMode } = useModeContext();
  return (
    <>
      <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      <Section
        style={{ backgroundColor: `${darkMode ? "#0d0d0d" : "#f8fafa"}` }}
      >
        <Container maxWidth="md" sx={{ color: "text.primary" }}>
          <Typography sx={{ mb: 2, textAlign: "center" }} variant="h4">
            TECHNOLOGIES
          </Typography>

          <RowCenter>
            {techUsed
              ? techUsed.map((tech, i) => {
                  return (
                    <Row
                      style={{
                        alignItems: "center",
                        width: 200,
                        boxShadow: darkMode
                          ? "0px 0px 8px rgba(255,255,255,0.1)"
                          : "2px 2px 8px rgba(0,0,0,0.1)",
                        margin: "0.5rem",
                        color: darkMode ? "white" : "black",
                        backgroundColor: darkMode ? "black" : "white",
                        borderRadius: 7,
                      }}
                      key={`${tech}_${i}`}
                    >
                      <DevIcon
                        className={`devicon-${tech}-plain colored`}
                      ></DevIcon>
                      <TechTitle>{tech.toUpperCase()}</TechTitle>
                    </Row>
                  );
                })
              : null}
          </RowCenter>
        </Container>
      </Section>
    </>
  );
};

export default Technologies;
