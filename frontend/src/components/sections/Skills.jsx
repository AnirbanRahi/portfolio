import "./sections.css";

import {
  SiC,
  SiCplusplus,
  //SiJava,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiIntellijidea,
  SiPycharm,
  SiPostman,
  SiLinux,
  SiNpm,
  SiDart,
  SiFlutter,
  SiDjango,
  SiFirebase,
  SiDocker,
  SiFigma,
  //SiMathworks,
  SiElectron,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { FaMemory } from "react-icons/fa6";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaShapes,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills overflow-hidden py-12 md:py-12">
      <div className="text-center mb-16 md:mb-16">
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
          Skills I've developed
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD] flex items-center justify-center">
              <FaCode size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-tight">
                Programming Languages
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiCplusplus size={28} color="#00599C" />
              <span>C/C++</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiPython size={28} color="#3776AB" />
              <span>Python</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiJavascript size={28} color="#F7DF1E" />
              <span>JavaScript</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiDart size={24} color="#9CA3AF" />
              <span>Dart</span>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD] flex items-center justify-center">
              <FaLaptopCode size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Frontend</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiReact size={28} color="#61DAFB" />
              <span>React</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiTailwindcss size={28} color="#06B6D4" />
              <span>Tailwind</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiFlutter size={28} color="#646CFF" />
              <span>Flutter</span>
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD]  flex items-center justify-center">
              <FaTools size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Developer Tools</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiGit size={28} color="#F05032" />
              <span>Git</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiGithub size={28} />
              <span>GitHub</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiLinux size={28} color="#FCC624" />
              <span>Linux</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD] flex items-center justify-center">
              <FaServer size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Backend</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiNodedotjs size={28} color="#5FA04E" />
              <span>Node.js</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiExpress size={28} />
              <span>Express.js</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD]  flex items-center justify-center">
              <FaDatabase size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Databases</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiMysql size={28} color="#4479A1" />
              <span>MySQL</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiSqlite size={28} color="#003B57" />
              <span>SQLite</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiFirebase size={28} color="#FFCA28" />
              <span>Firebase</span>
            </div>
          </div>
        </div>
        {/* Others */}
        <div className="rounded-2xl border border-white/10  p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-[#E8E5DD]  flex items-center justify-center">
              <FaShapes size={24} className="text-stone-700" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Other</h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiFigma size={28} color="#F24E1E" />
              <span>Figma</span>
            </div>

            <div className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-xl gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-stone-200">
              <SiElectron size={28} color="#47848F" />
              <span>Electron</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
