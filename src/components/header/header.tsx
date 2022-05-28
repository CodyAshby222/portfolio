import { Container } from "@mui/material";
import { Row, RowCenter, WhiteButton } from "../../appStyles";
import {
  HomeHeaderImage,
  Section,
  WaveImage,
  Title,
  SubTitle,
  HomeHeaderBox,
  SocialImage,
  SocialLink,
} from "./headerStyles";
import { useModeContext } from "../../hooks/useContext";

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
          background: `url(${
            darkMode ? DarkBg : LightBg
          }) no-repeat center center fixed`,
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
            <HomeHeaderImage src={darkMode ? DarkImg : LightImg} />
          </RowCenter>
        </Container>
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

// const ProjectHeader = () => {
//   return (
//     <>
//       <div>PROJECT HEADER</div>
//     </>
//   );
// };

export { HomeHeader };
