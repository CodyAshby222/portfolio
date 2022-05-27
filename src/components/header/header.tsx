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
import { useEffect } from "react";

const HeaderImg = require("../../assets/images/header-img.png");
const WhiteWave = require("../../assets/images/white-wave.png");
const BlackWave = require("../../assets/images/black-wave.png");
const EmailImg = require("../../assets/images/email-icon.png");
const LinkedInImg = require("../../assets/images/linkedin-icon.png");
const GitHubImg = require("../../assets/images/github-icon.png");

const HomeHeader = () => {
  const { darkMode } = useModeContext();
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);
  return (
    <>
      <Section>
        <Container maxWidth="lg">
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
            <HomeHeaderImage src={HeaderImg} />
          </RowCenter>
        </Container>
        <div>{darkMode ? "Dark" : "Light"}</div>
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
