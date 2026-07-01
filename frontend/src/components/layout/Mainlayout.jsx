import Sidebar from "./Sidebar";
import { Sidebar_Mid_Sm_Top, Sidebar_Mid_Sm_Bottom } from "./Sidebar_Mid_Sm";
import Feed from "./Feed";
import "./components.css";
import { useState, useEffect, useRef } from "react";

function MainLayout() {
  const [activeSection, setActiveSection] = useState("Home");
  const mainRef = useRef(null);

  // Auto-detect active section on scroll using IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "skills",
      "education_career",
      "contacts",
    ];
    const sectionLabels = {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education_career: "Education & Career",
      contacts: "Contacts",
    };

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionLabels[id]);
          }
        },
        {
          root: mainRef.current,
          rootMargin: "-40% 0px -55% 0px", // trigger when section is ~top-area of viewport
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="full-body h-screen overflow-hidden bg-[#fafaf7]">
      <div className="flex flex-col lg:grid h-full lg:grid-cols-[220px_1fr] lg:gap-4">
        
        {/* Mobile Top Accordion */}
        <div className="block lg:hidden shrink-0 z-50">
          <Sidebar_Mid_Sm_Top setActiveSection={setActiveSection} />
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <Sidebar setActiveSection={setActiveSection} />
        </aside>

        {/* Scrollable Main Content */}
        <main
          ref={mainRef}
          className="flex-1 lg:h-full overflow-y-auto rounded-sm no-scrollbar"
        >
          <Feed />
        </main>

        {/* Mobile Bottom Navigation */}
        <div className="block lg:hidden shrink-0 z-50">
          <Sidebar_Mid_Sm_Bottom setActiveSection={setActiveSection} />
        </div>

      </div>
    </div>
  );
}

export default MainLayout;
