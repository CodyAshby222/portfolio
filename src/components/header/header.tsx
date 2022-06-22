import { Container, useMediaQuery } from "@mui/material";
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
  ProjectHeaderBox,
  SocialImage,
  SocialLink,
  InvertedWaveImage,
} from "./headerStyles";
import { useModeContext } from "../../hooks/useContext";
import { HeaderAnimation } from "../animations/animation";
import ContactModal from "../modal/modal";

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
  const lgScreen = useMediaQuery("(max-width:1125px)");
  const tablet = useMediaQuery("(max-width:800px)");
  const mobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <Section
        style={{
          background: `url(${darkMode ? DarkBg : LightBg}) center center`,
          padding: tablet ? "5rem 0" : "9rem 0",
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <HomeHeaderBox
              style={{
                alignItems: lgScreen ? "center" : "",
                width: mobile ? 325 : 500,
              }}
            >
              <SubTitle>Hello, I'm</SubTitle>
              <Title style={{ fontSize: mobile ? "2.5rem" : "3.5rem" }}>
                CODY ASHBY
              </Title>
              <SubTitle style={{ fontSize: mobile ? "1.25rem" : "1.5rem" }}>
                FRONT-END WEB DEVELOPER
              </SubTitle>
              <Row style={{ marginTop: 20, marginBottom: 40 }}>
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
              </Row>
              <ContactModal whiteColor={true} />
            </HomeHeaderBox>
            <Relative>
              <HomeHeaderImage
                style={{ width: tablet ? 325 : 500 }}
                src={darkMode ? DarkImg : LightImg}
              />
              <HeaderAnimation />
            </Relative>
          </RowCenter>
        </Container>
        <WaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

const ProjectHeader = ({ title, subtitle, website }) => {
  const { darkMode } = useModeContext();
  return (
    <>
      <Section
        style={{
          background: `url(${darkMode ? DarkBg : LightBg}) center center`,
          padding: "7rem 0",
        }}
      >
        <Container>
          <RowCenter style={{ alignItems: "center" }}>
            <ProjectHeaderBox>
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
                {website ? (
                  <WhiteButton style={{ margin: "1rem" }}>
                    VIEW WEBSITE
                  </WhiteButton>
                ) : null}
              </RowCenter>
            </ProjectHeaderBox>
          </RowCenter>
        </Container>
        <InvertedWaveImage src={darkMode ? BlackWave : WhiteWave} />
      </Section>
    </>
  );
};

export { HomeHeader, ProjectHeader };
