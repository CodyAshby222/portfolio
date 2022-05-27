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
} from "./headerStyles";

const HeaderImg = require("../../assets/images/header-img.png");
const WaveImg = require("../../assets/images/white-wave.png");
const EmailImg = require("../../assets/images/email-icon.png");
const LinkedInImg = require("../../assets/images/linkedin-icon.png");
const GitHubImg = require("../../assets/images/github-icon.png");

const HomeHeader = () => {
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
                <SocialImage src={EmailImg} />
                <SocialImage src={LinkedInImg} />
                <SocialImage src={GitHubImg} />
              </Row>
              <WhiteButton>LET'S CHAT</WhiteButton>
            </HomeHeaderBox>
            <HomeHeaderImage src={HeaderImg} />
          </RowCenter>
        </Container>
        <WaveImage src={WaveImg} />
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
