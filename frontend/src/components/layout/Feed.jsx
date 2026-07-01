import Home from "../sections/Home.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Education_Career from "../sections/Education_Career.jsx";
import Contacts from "../sections/Contacts.jsx";

function Feed() {
  return (
    <div className="feed">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education_career">
        <Education_Career />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default Feed;
