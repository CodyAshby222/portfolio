import { Container } from "@mui/material";
import {
  Row,
  RowCenter,
  WhiteButton,
  WhiteOutlineButton,
  Relative,
} from "../../appStyles";
import {
  HomeHeaderImage,
  Section,
  WaveImage,
  Title,
  SubTitle,
  HomeHeaderBox,
  SocialImage,
  SocialLink,
  InvertedWaveImage,
} from "./headerStyles";
import { useModeContext } from "../../hooks/useContext";
import { HeaderAnimation } from "../animations/animation";

const LightImg = require("../../assets/images/light/header-img.png");
const DarkImg = require("../../assets/images/dark/header-img.png");
const WhiteWave = require("../../assets/images/light/white-wave.png");
const BlackWave = require("../../assets/images/dark/black-wave.png");
const EmailImg = require("../../assets/icons/email-icon.png");
const LinkedInImg = require("../../assets/icons/linkedin-icon.png");
const GitHubImg = require("../../assets/icons/github-icon.png");
const LightBg = require("../../assets/images/light/header-bg.jpg");
const DarkBg = require("../../assets/images/dark/header-bg.jpg");

const HomeHeader = () => {
  const { darkMode } = useModeContext();
  return (
    <>
      <Section
        style={{
          background: `url(${darkMode ? DarkBg : LightBg}) center center`,
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <HomeHeaderBox>
              <SubTitle>Hello, I'm</SubTitle>
              <Title>CODY ASHBY</Title>
              <SubTitle>FRONT-END WEB DEVELOPER</SubTitle>
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
              <WhiteButton>LET'S CHAT</WhiteButton>
            </HomeHeaderBox>
            <Relative>
              <HomeHeaderImage src={darkMode ? DarkImg : LightImg} />
              <HeaderAnimation />
            </Relative>
          </RowCenter>
        </Container>
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

const ProjectHeader = ({ title, subtitle }) => {
  const { darkMode } = useModeContext();
  return (
    <>
      <Section
        style={{
          background: `url(${darkMode ? DarkBg : LightBg}) center center`,
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <HomeHeaderBox>
              <Title style={{ textAlign: "center" }}>
                {title.toUpperCase()}
              </Title>
              <SubTitle style={{ textAlign: "center" }}>
                {subtitle.toUpperCase()}
              </SubTitle>
              <RowCenter>
                <WhiteOutlineButton style={{ margin: "1rem" }}>
                  VIEW GITHUB
                </WhiteOutlineButton>
                <WhiteButton style={{ margin: "1rem" }}>
                  VIEW WEBSITE
                </WhiteButton>
              </RowCenter>
            </HomeHeaderBox>
          </RowCenter>
        </Container>
        <InvertedWaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

export { HomeHeader, ProjectHeader };
