import { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCoffeeThin } from "react-icons/pi";
import { CiAt } from "react-icons/ci";
import { GoGitMergeQueue, GoLightBulb, GoDownload } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { RiContactsLine } from "react-icons/ri";
import profilepic from "../../assets/images/profile.png";

export function Sidebar_Mid_Sm_Top({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f7f5ef] border-b border-[#e7e5df] shadow-[0_4px_10px_rgba(0,0,0,0.03)] rounded-b-xl relative z-50">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <img
            src={profilepic}
            alt="Anirban Rahi"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight text-stone-900">
              Anirban Rahi
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.65)]" />
              <p className="text-[13px] font-medium tracking-tight text-stone-800">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
        <button className="p-2 text-stone-500">
          <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 border-t border-[#e7e5df] mx-4">
          <p className="text-[12px] tracking-tight text-stone-500">
            Currently working at nowwhere.
          </p>
          <div className="mt-4 flex gap-3 text-lg text-stone-700">
            <FaLinkedin className="cursor-pointer hover:text-stone-900 transition-colors" />
            <FaGithub className="cursor-pointer hover:text-stone-900 transition-colors" />
            <MdEmail className="cursor-pointer hover:text-stone-900 transition-colors" />
          </div>
          
          <hr className="mt-4 border-[#000] opacity-20" />
          <div className="mt-4 flex items-center gap-2 text-[14px] font-medium text-stone-900 cursor-pointer hover:opacity-70 transition-opacity">
            <GoDownload className="text-lg" />
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar_Mid_Sm_Bottom({ setActiveSection }) {
  const scrollToSection = (id, label) => {
    setActiveSection(label);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-[#f7f5ef] border-t border-[#e7e5df] px-2 py-3 flex justify-around items-center rounded-t-xl shadow-[0_-4px_10px_rgba(0,0,0,0.03)] relative z-50">
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("home", "Home")}>
        <PiCoffeeThin className="text-xl" />
        <span className="text-[10px] font-medium">Home</span>
      </section>
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("about", "About")}>
        <CiAt className="text-xl" />
        <span className="text-[10px] font-medium">About</span>
      </section>
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("projects", "Projects")}>
        <GoGitMergeQueue className="text-xl" />
        <span className="text-[10px] font-medium">Projects</span>
      </section>
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("skills", "Skills")}>
        <GoLightBulb className="text-xl" />
        <span className="text-[10px] font-medium">Skills</span>
      </section>
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("education_career", "Education & Career")}>
        <SlGraduation className="text-xl" />
        <span className="text-[10px] font-medium">Edu</span>
      </section>
      <section className="flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors duration-200" onClick={() => scrollToSection("contacts", "Contacts")}>
        <RiContactsLine className="text-xl" />
        <span className="text-[10px] font-medium">Contacts</span>
      </section>
    </div>
  );
}

export default Sidebar_Mid_Sm_Top;
