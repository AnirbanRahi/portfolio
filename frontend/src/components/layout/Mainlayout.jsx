import Sidebar from "./Sidebar.jsx";

import "./components.css";
function Mainlayout() {
  return (
    <>
      <div className="main-layout">
        <Sidebar />
        <div className="feed">
          <p>Hellow</p>
        </div>
      </div>
    </>
  );
}

export default Mainlayout;
