import About from "../../components/about/about";
import Skills from "../../components/skills/skills";
import { HomeHeader } from "../../components/header/header";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <About />
      <Skills />
    </>
  );
};

export default Home;
