import React, { useEffect, useRef, useState } from "react";
import Brand_logo from "../../assets/brand-logologo.svg";
import Home from "../../components/home/home";
import About from "../../components/about/about";
import Projects from "../../components/projects/projects";

function Navigation() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-full w-full">
      <div className="navbar w-full px-10 py-4 flex h-[10vh] justify-between items-center bg-[#008080] sticky top-0 z-50">
        <li
          onClick={handleScrollToTop}
          className="brand-logo-box list-none cursor-pointer"
        >
          <img src={Brand_logo} alt="brand-logo" className="h-[35px]" />
        </li>
        <div className="nav-links-container flex justify-evenly gap-5 items-center text-base text-white">
          <li
            onClick={handleScrollToTop}
            className="hover:font-semibold list-none cursor-pointer"
          >
            HOME
          </li>
          <li
            onClick={() => handleScrollToSection(aboutRef)}
            className="hover:font-semibold  list-none cursor-pointer"
          >
            ABOUT
          </li>
          <li
            onClick={() => handleScrollToSection(projectsRef)}
            className="hover:font-semibold  list-none cursor-pointer"
          >
            PROJECTS
          </li>
          <li className="hover:font-semibold  list-none cursor-pointer">
            CONTACT
          </li>
          <button className="px-3 py-2 bg-[#FFB347] rounded hover:translate-y-0.5 hover:shadow-md active:-translate-y-0.5 active:shadow-sm transition-all">
            Download CV
          </button>
        </div>
      </div>
      <div className="main-content">
        <section ref={homeRef} className="w-full h-[90vh]">
          <Home />
        </section>
        <section ref={aboutRef} className="w-full h-[90vh]">
          <About />
        </section>
        <section ref={projectsRef} className="w-full h-[90vh]">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default Navigation;
