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
import profilepic from "../../assets/images/profile.png";
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
      <div className="sidebar hidden lg:lg:flex flex-col items-start rounded-sm backdrop-blur-md">
        <img
          src={profilepic}
          alt=""
          className="mt-6 ml-6 w-24 h-24 object-cover"
        />

        <p className="mt-4 ml-6 text-2xl font-semibold tracking-tight text-stone-900">
          Anirban Rahi
        </p>

        {/* Employment Section */}
        <div className="mt-2 ml-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.65)]" />
            <p className="text-[14px] font-medium tracking-tight text-stone-800">
              Frontend Developer
            </p>
          </div>
          <p className="mt-1 text-[12px] tracking-tight text-stone-500">
            Currently working at nowwhere.
          </p>
        </div>
        {/*Social Icons*/}
        <div className="mt-2 ml-6 flex gap-2 ">
          <FaLinkedin />
          <FaGithub />
          <MdEmail />
        </div>
        <hr className="mt-2 ml-auto mr-auto w-[80%] border-[#000]" />
        {/*Sections Name */}
        <div className="flex flex-col items-start gap-4 mt-8 ml-6">
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() => scrollToSection("home", "Home")}
          >
            <PiCoffeeThin />
            Home
          </section>
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() => scrollToSection("about", "About")}
          >
            <CiAt />
            About
          </section>
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() => scrollToSection("projects", "Projects")}
          >
            <GoGitMergeQueue />
            Projects
          </section>
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() => scrollToSection("skills", "Skills")}
          >
            <GoLightBulb />
            Skills
          </section>
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() =>
              scrollToSection("education_career", "Education & Career")
            }
          >
            <SlGraduation />
            Education & Career
          </section>
          <section
            className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-stone-900"
            onClick={() => scrollToSection("contacts", "Contacts")}
          >
            <RiContactsLine />
            Contacts
          </section>
        </div>
        {/*CV */}
        <div className="mt-12 ml-6 flex items-center gap-2">
          <GoDownload />
          Download CV
        </div>
      </div>
    </>
  );
}

export default Sidebar;
