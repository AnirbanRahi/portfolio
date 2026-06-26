import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import "./components.css";
function Mainlayout() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <div className="main-layout">
        <Sidebar setActiveSection={setActiveSection} />
        <div className="feed">
          <Feed activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}

export default Mainlayout;
