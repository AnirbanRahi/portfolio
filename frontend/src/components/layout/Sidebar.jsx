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
function Sidebar() {
  return (
    <>
      <div className="sidebar">
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
          <section className="section-name">
            <PiCoffeeThin />
            Home
          </section>
          <section className="section-name">
            <CiAt />
            About
          </section>
          <section className="section-name">
            <GoGitMergeQueue />
            Projects
          </section>
          <section className="section-name">
            <GoLightBulb />
            Skills
          </section>
          <section className="section-name">
            <SlGraduation />
            Education & Career
          </section>
          <section className="section-name">
            <RiContactsLine />
            Contacts
          </section>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
