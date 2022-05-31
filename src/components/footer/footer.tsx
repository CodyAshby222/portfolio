import { Container, Box, Typography } from "@mui/material";
import { Row, RowCenter, WhiteButton } from "../../appStyles";
import { Section, WaveImage, SocialImage, SocialLink } from "./footerStyles";
import { useModeContext } from "../../hooks/useContext";

const WhiteWave = require("../../assets/images/light/white-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");
const EmailImg = require("../../assets/icons/email-icon.png");
const LinkedInImg = require("../../assets/icons/linkedin-icon.png");
const GitHubImg = require("../../assets/icons/github-icon.png");
const LightBg = require("../../assets/images/light/header-bg.jpg");
const DarkBg = require("../../assets/images/dark/header-bg.jpg");

const Footer = () => {
  const { darkMode } = useModeContext();
  return (
    <>
      <Section
        style={{
          background: `url(${
            darkMode ? DarkBg : LightBg
          }) no-repeat center center fixed`,
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <Box>
              <Typography>Want to get in touch?</Typography>
              <WhiteButton>LET'S CHAT</WhiteButton>
              <Row style={{ marginTop: 20, marginBottom: 40 }}>
                <SocialLink href="#">
                  <SocialImage src={EmailImg} />
                </SocialLink>
                <SocialLink href="#">
                  <SocialImage src={LinkedInImg} />
                </SocialLink>
                <SocialLink href="#">
                  <SocialImage src={GitHubImg} />
                </SocialLink>
              </Row>
            </Box>
          </RowCenter>
        </Container>
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

export default Footer;
