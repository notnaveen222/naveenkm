import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import GreyBlueButton from "../GeneralComponents/GreyBlueButton/GreyBlueButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[600px] sm:h-[750px] font-inter ">
      <div className="flex flex-col items-center text-5xl text-white sm:text-8xl ">
        <motion.div>MODERN</motion.div>
        <motion.div>AESTHETICS</motion.div>
      </div>
      <div className="w-[80%] lg:w-[28%] text-lg sm:text-xl text-center subheading mt-7 text-graya1">
        Designer and Developer, focused on intuitive and engaging user
        experiences.
      </div>

      <GreyBlueButton title={"Resume"} />
    </div>
  );
};

export default Home;
