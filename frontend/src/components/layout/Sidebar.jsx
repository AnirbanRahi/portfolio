import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCoffeeThin } from "react-icons/pi";
import { CiAt } from "react-icons/ci";
import { GoGitMergeQueue } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { RiContactsLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import Cute_GhostCanvas from "../Cute_GhostCanvas";
function Sidebar({ setActiveSection }) {
  const scrollToSection = (id, label) => {
    setActiveSection(label);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="sidebar rounded-sm backdrop-blur-md">
        {/* <div style={{ width: 300, height: 300 }}>
          <Cute_GhostCanvas />
        </div> */}
        <p className="profile-name">Anirban Rahi</p>
        <div className="social-logo">
          <FaLinkedin />
          <FaGithub />
          <MdEmail />
        </div>
        <div className="cv">
          <GoDownload />
          Download CV
        </div>
        <div className="sections">
          <section
            className="section-name"
            onClick={() => scrollToSection("home", "Home")}
          >
            <PiCoffeeThin />
            Home
          </section>
          <section
            className="section-name"
            onClick={() => scrollToSection("about", "About")}
          >
            <CiAt />
            About
          </section>
          <section
            className="section-name"
            onClick={() => scrollToSection("projects", "Projects")}
          >
            <GoGitMergeQueue />
            Projects
          </section>
          <section
            className="section-name"
            onClick={() => scrollToSection("skills", "Skills")}
          >
            <GoLightBulb />
            Skills
          </section>
          <section
            className="section-name"
            onClick={() =>
              scrollToSection("education_career", "Education & Career")
            }
          >
            <SlGraduation />
            Education & Career
          </section>
          <section
            className="section-name"
            onClick={() => scrollToSection("contacts", "Contacts")}
          >
            <RiContactsLine />
            Contacts
          </section>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
