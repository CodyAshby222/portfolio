import { Container, Box } from "@mui/material";
import {
  OrangeButton,
  RowCenter,
  WhiteButton,
  WhiteText,
} from "../../appStyles";
import { Section, WaveImage, SocialImage, SocialLink } from "./footerStyles";
import { useModeContext } from "../../hooks/useContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ContactModal from "../modal/modal";

const WhiteWave = require("../../assets/images/light/white-wave.png");
const GreyWave = require("../../assets/images/light/grey-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");
const DarkGreyWave = require("../../assets/images/dark/grey-wave.png");
const EmailImg = require("../../assets/icons/email-icon.png");
const LinkedInImg = require("../../assets/icons/linkedin-icon.png");
const GitHubImg = require("../../assets/icons/github-icon.png");
const LightBg = require("../../assets/images/light/header-bg.jpg");
const DarkBg = require("../../assets/images/dark/header-bg.jpg");

const Footer = () => {
  const { darkMode } = useModeContext();
  const location = useLocation();

  return (
    <>
      <Section
        style={{
          background: `url(${darkMode ? DarkBg : LightBg}) center center`,
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <Box>
              <WhiteText
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: 500,
                }}
              >
                Want to get in touch?
              </WhiteText>
              {darkMode ? (
                <div style={{ margin: "1.5rem auto", width: 195 }}>
                  <ContactModal whiteColor={true} />
                </div>
              ) : (
                <div style={{ margin: "1.5rem auto", width: 195 }}>
                  <ContactModal whiteColor={false} />
                </div>
              )}
              <RowCenter style={{ marginTop: "2rem", marginBottom: 40 }}>
                <SocialLink href="mailto:cashby220@gmail.com">
                  <SocialImage src={EmailImg} />
                </SocialLink>
                <SocialLink
                  target="_blank"
                  href="https://www.linkedin.com/in/cody-ashby-240b381b8"
                >
                  <SocialImage src={LinkedInImg} />
                </SocialLink>
                <SocialLink
                  target="_blank"
                  href="https://github.com/CodyAshby222"
                >
                  <SocialImage src={GitHubImg} />
                </SocialLink>
              </RowCenter>
            </Box>
          </RowCenter>
        </Container>

        <WaveImage
          src={
            darkMode && location.pathname.includes("project")
              ? DarkGreyWave
              : darkMode
              ? BlackWave
              : location.pathname.includes("project")
              ? GreyWave
              : WhiteWave
          }
        />
      </Section>
    </>
  );
};

export default Footer;
