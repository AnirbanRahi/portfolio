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
function Skills() {
  return (
    <>
      <div className="skills h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">
              Programming Languages
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <FaMemory size={28} color="#A8B9CC" />
                <span>Assembly</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiCplusplus size={28} color="#00599C" />
                <span>C/C++</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <span className="text-2xl">☕</span>
                <span>Java</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiPython size={28} color="#3776AB" />
                <span>Python</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiJavascript size={28} color="#F7DF1E" />
                <span>JavaScript</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiDart size={24} color="#9CA3AF" />
                <span>Dart</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">Frontend</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiHtml5 size={28} color="#E34F26" />
                <span>HTML5</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiCss size={28} color="#1572B6" />
                <span>CSS3</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiReact size={28} color="#61DAFB" />
                <span>React</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiTailwindcss size={28} color="#06B6D4" />
                <span>Tailwind</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiFlutter size={28} color="#646CFF" />
                <span>Flutter</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <span className="text-2xl">B</span>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Developer Tools */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">Developer Tools</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiGit size={28} color="#F05032" />
                <span>Git</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiGithub size={28} />
                <span>GitHub</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiLinux size={28} color="#FCC624" />
                <span>Linux</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiNpm size={28} color="#CB3837" />
                <span>npm</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiPostman size={28} color="#FF6C37" />
                <span>Postman</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiDocker size={28} color="#2496ED" />
                <span>Docker</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">Backend</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiNodedotjs size={28} color="#5FA04E" />
                <span>Node.js</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiExpress size={28} />
                <span>Express.js</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiDjango size={28} color="#092E20" />
                <span>Django</span>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">Databases</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiMysql size={28} color="#4479A1" />
                <span>MySQL</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiSqlite size={28} color="#003B57" />
                <span>SQLite</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiFirebase size={28} color="#FFCA28" />
                <span>Firebase</span>
              </div>
            </div>
          </div>
          {/* Others */}
          <div className="skill-category rounded-2xl border border-white/10  p-6">
            <h3 className="mb-5 text-xl font-semibold">Other</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiFigma size={28} color="#F24E1E" />
                <span>Figma</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <span className="text-2xl">☕</span>
                <span>Matlab</span>
              </div>

              <div className="skill-card flex flex-col items-center justify-center gap-2">
                <SiElectron size={28} color="#47848F" />
                <span>Electron</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
