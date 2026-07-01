import encrypta from "../../assets/images/encrypta.jpg";
import "./sections.css";
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import PythonLogo from "../../assets/images/python.svg";
import QTLogo from "../../assets/images/qt.svg";
import CryptoLogo from "../../assets/images/cryptography.svg";
import FolderLogo from "../../assets/images/folder.png";
import InnoLogo from "../../assets/images/innosetup.svg";

function StatusBadge({ status }) {
  const isDeveloping = status === "developing";
  return (
    <div className="status-badge">
      <span
        className={
          isDeveloping ? "status-dot developing" : "status-dot finished"
        }
      ></span>
      <span className="status-label">
        {isDeveloping ? "Currently Developing" : "Finished"}
      </span>
    </div>
  );
}

function Projects() {
  return (
    <>
      <div className="projects grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
        {/* Farmer App */}
        <div className="project-card">
          <div className="project-screenshot">
            <img src={encrypta} alt="" className="encrypta" />
          </div>
          <div className="card-body">
            <div className="card-header-row">
              <h2 className="project-name">Farmer App</h2>
              <StatusBadge status="developing" />
            </div>
            <p className="project-description">
              A lightweight Python and PyQt6 desktop app for secure
              password-based file encryption using AES-GCM. Features
              authenticated encryption, a custom .enc format, and a Windows
              installer.
            </p>
            <div className="project-tectstack-lists">
              <div className="techlist">
                <img src={PythonLogo} alt="Python" width={16} height={16} />
                Python
              </div>
              <div className="techlist">
                <img src={QTLogo} alt="PyQT6" width={16} height={16} />
                PyQT6
              </div>
              <div className="techlist">
                <img
                  src={FolderLogo}
                  alt="Cryptography"
                  width={16}
                  height={16}
                />
                Crytography
              </div>
              <div className="techlist">
                <img src={FolderLogo} alt="File I/O" width={16} height={16} />
                File I/O
              </div>
              <div className="techlist">
                <img src={InnoLogo} alt="Inno Setup" width={16} height={16} />
                Inno Setup
              </div>
            </div>
            <div className="buttons">
              <a href="#" className="download-exe">
                <GoDownload />
                <span>Download .exe</span>
              </a>
              <a href="#" className="github-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Encrypta */}
        <div className="project-card">
          <div className="project-screenshot">
            <img src={encrypta} alt="" className="encrypta" />
          </div>
          <div className="card-body">
            <div className="card-header-row">
              <h2 className="project-name">Encrypta</h2>
              <StatusBadge status="finished" />
            </div>
            <p className="project-description">
              A lightweight Python and PyQt6 desktop app for secure
              password-based file encryption using AES-GCM. Features
              authenticated encryption, a custom .enc format, and a Windows
              installer.
            </p>
            <div className="project-tectstack-lists">
              <div className="techlist">
                <img src={PythonLogo} alt="Python" width={16} height={16} />
                Python
              </div>
              <div className="techlist">
                <img src={QTLogo} alt="PyQT6" width={16} height={16} />
                PyQT6
              </div>
              <div className="techlist">
                <img
                  src={FolderLogo}
                  alt="Cryptography"
                  width={16}
                  height={16}
                />
                Crytography
              </div>
              <div className="techlist">
                <img src={FolderLogo} alt="File I/O" width={16} height={16} />
                File I/O
              </div>
              <div className="techlist">
                <img src={InnoLogo} alt="Inno Setup" width={16} height={16} />
                Inno Setup
              </div>
            </div>
            <div className="buttons">
              <a href="#" className="download-exe">
                <GoDownload />
                <span>Download .exe</span>
              </a>
              <a href="#" className="github-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Musiclay */}
        <div className="project-card">
          <div className="project-screenshot">
            <img src={encrypta} alt="" className="encrypta" />
          </div>
          <div className="card-body">
            <div className="card-header-row">
              <h2 className="project-name">Musiclay</h2>
              <StatusBadge status="finished" />
            </div>
            <p className="project-description">
              A lightweight Python and PyQt6 desktop app for secure
              password-based file encryption using AES-GCM. Features
              authenticated encryption, a custom .enc format, and a Windows
              installer.
            </p>
            <div className="project-tectstack-lists">
              <div className="techlist">
                <img src={PythonLogo} alt="Python" width={16} height={16} />
                Python
              </div>
              <div className="techlist">
                <img src={QTLogo} alt="PyQT6" width={16} height={16} />
                PyQT6
              </div>
              <div className="techlist">
                <img
                  src={FolderLogo}
                  alt="Cryptography"
                  width={16}
                  height={16}
                />
                Crytography
              </div>
              <div className="techlist">
                <img src={FolderLogo} alt="File I/O" width={16} height={16} />
                File I/O
              </div>
              <div className="techlist">
                <img src={InnoLogo} alt="Inno Setup" width={16} height={16} />
                Inno Setup
              </div>
            </div>
            <div className="buttons">
              <a href="#" className="download-exe">
                <GoDownload />
                <span>Download .exe</span>
              </a>
              <a href="#" className="github-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Shop Manager */}
        <div className="project-card">
          <div className="project-screenshot">
            <img src={encrypta} alt="" className="encrypta" />
          </div>
          <div className="card-body">
            <div className="card-header-row">
              <h2 className="project-name">Shop Manager</h2>
              <StatusBadge status="finished" />
            </div>
            <p className="project-description">
              A lightweight Python and PyQt6 desktop app for secure
              password-based file encryption using AES-GCM. Features
              authenticated encryption, a custom .enc format, and a Windows
              installer.
            </p>
            <div className="project-tectstack-lists">
              <div className="techlist">
                <img src={PythonLogo} alt="Python" width={16} height={16} />
                Python
              </div>
              <div className="techlist">
                <img src={QTLogo} alt="PyQT6" width={16} height={16} />
                PyQT6
              </div>
              <div className="techlist">
                <img
                  src={FolderLogo}
                  alt="Cryptography"
                  width={16}
                  height={16}
                />
                Crytography
              </div>
              <div className="techlist">
                <img src={FolderLogo} alt="File I/O" width={16} height={16} />
                File I/O
              </div>
              <div className="techlist">
                <img src={InnoLogo} alt="Inno Setup" width={16} height={16} />
                Inno Setup
              </div>
            </div>
            <div className="buttons">
              <a href="#" className="download-exe">
                <GoDownload />
                <span>Download .exe</span>
              </a>
              <a href="#" className="github-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
