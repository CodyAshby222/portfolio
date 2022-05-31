import About from "../../components/about/about";
import Skills from "../../components/skills/skills";
import { HomeHeader } from "../../components/header/header";
import ProjectSection from "../../components/projectSection/projectSection";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <About />
      <Skills />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Home;
