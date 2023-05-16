import React from "react";
import Star from "../star/star.component";
import HeroImage from "../../assets/hero-img.png";

function Home() {
  return (
    <div className="w-full h-full bg-[#008080] grid grid-cols-2 px-[5rem]">
      <div className="hero-text-col w-full h-full grid ">
        <div className="w-[500px] h-full pt-[6.5rem] ">
          <h2 className="block mb-4 mt-[25px]">
            <span className="block text-4xl font-bold text-[#FFB347]">
              FRONTEND
            </span>
            <span className="block text-4xl font-bold text-[#FFB347]">
              DEVELOPER
            </span>
          </h2>
          <p className="text-[15px] text-white leading-6 tracking-wider ">
            I am Nartey Benjamin, an experienced frontend developer base in
            Ghana, West Africa adapt in all stages of web development. Turning
            concept into real life product is my calling.
          </p>
        </div>
      </div>
      <div className="hero-img-col w-full h-full grid place-items-end">
        <div className="w-[500px] h-full pt-10 relative">
          <div className="w-full h-[400px] absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <Star />
          </div>
          <div
            style={{
              backgroundImage: `url(${HeroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="hero-image-container absolute z-10 top-[55%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full h-[90%]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
