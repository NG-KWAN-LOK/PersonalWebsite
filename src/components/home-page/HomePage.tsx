import styles from "./style.module.scss";
import Header from "./Header";
import Home from "./Home";
import Intro from "./Intro";
import Skill from "./Skill";
import OtherSkill from "./OtherSkill";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";
import Instrument from "./Instrument";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export const HomePage = () => {
  document.title = "Kwan Lok NG Official";
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Home />
        <Intro />
        <Skill />
        <OtherSkill />
        <Experience />
        <Education />
        <Languages />
        <Instrument />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};
