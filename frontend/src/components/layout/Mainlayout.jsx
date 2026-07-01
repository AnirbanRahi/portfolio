import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./components.css";
import { useState, useEffect, useRef } from "react";

function MainLayout() {
  const [activeSection, setActiveSection] = useState("Home");
  const mainRef = useRef(null);

  // Auto-detect active section on scroll using IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "education_career", "contacts"];
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
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="full-body h-screen overflow-hidden bg-[#fafaf7]">
      <div className="grid h-full grid-cols-[220px_1fr] gap-4">
        <aside className="">
          <Sidebar setActiveSection={setActiveSection} />
        </aside>

        <main
          ref={mainRef}
          className="h-full overflow-y-auto rounded-sm no-scrollbar"
        >
          <header className="sticky top-0 z-20 border-b backdrop-blur-md pt-6">
            <h1 className="text-3xl font-bold">{activeSection}</h1>
          </header>
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
