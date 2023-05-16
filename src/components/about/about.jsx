import React from "react";
import "./about.css";

function About() {
  return (
    <div className="w-full h-full bg-[#F5F5F5] px-[5rem] py-[3rem]">
      <h2 className="text-4xl font-bold text-center mt-16 text-black mb-[6rem]">ABOUT ME</h2>
      <div className="w-full flex justify-between">
        <div className="left-col w-full">
          <p className="p-2 text-[15px] text-black leading-6 tracking-wider w-[500px]">
            <span className="block mb-2">
              I am Nartey Tetteh Benjamin, a frontend web developer base in
              Ghana, I specialize in creating responsive and accessible web
              designs that are optimized for performance and usability.
            </span>
            <span className="block mb-2">
              I like sharing content related to stuffs I’ve learned over the
              years in web development so it can help other developers in the
              Dev community.
            </span>
            <span className="block mb-2">
              I like sharing content related to stuffs I’ve learned over the
              years in web development so it can help other developers in the
              Dev community.
            </span>
          </p>
        </div>
        <div className="right-col w-full grid place-items-center">
          <div className="w-[500px] text-2xl font-bold text-center flex flex-col justify-center items-center gap-10 mb-[2rem] relative">
            <h4>TECH SKILLS</h4>
            <div className="pentagon w-[200px] h-[200px] bg-[#F5F5F5] relative overflow-hidden "></div>
            <div className="skills-div-1 text-white p-2 bg-[#008080] text-base font-semibold absolute z-10 rounded">
              REACT JS
            </div>
            <div className="skills-div-2 text-white p-2 bg-[#008080] text-base font-semibold absolute z-10 rounded">
              HTML
            </div>
            <div className="skills-div-3 text-white p-2 bg-[#008080] text-base font-semibold absolute z-10 rounded">
              TAILWIND
            </div>
            <div className="skills-div-4 text-white p-2 bg-[#008080] text-base font-semibold absolute z-10 rounded">
              NUNJUCKS
            </div>
            <div className="skills-div-5 text-white p-2 bg-[#008080] text-base font-semibold absolute z-10 rounded">
              FLUTTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
