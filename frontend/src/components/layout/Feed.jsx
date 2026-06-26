import Home from "../sections/Home.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Education_Career from "../sections/Education_Career.jsx";
import Contacts from "../sections/Contacts.jsx";
function Feed({ activeSection }) {
  if (activeSection === "home") {
    return <Home />;
  } else if (activeSection === "about") {
    return <About />;
  } else if (activeSection === "projects") {
    return <Projects />;
  } else if (activeSection === "skills") {
    return <Skills />;
  } else if (activeSection === "education_career") {
    return <Education_Career />;
  } else if (activeSection === "contacts") {
    return <Contacts />;
  } else {
    return <Home />;
  }
}
export default Feed;
