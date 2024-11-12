import React from "react";
import BentoGrid from "./BentoGrid";

const About = () => {
  return (
    <div className="flex flex-col items-center  max-w-[1240px] mx-auto text-white  ">
      <div className="mb-10 text-4xl text-white sm:text-7xl">About</div>
      <div className="px-8 mb-32 sm:px-0">
        <BentoGrid />
      </div>
    </div>
  );
};

export default About;