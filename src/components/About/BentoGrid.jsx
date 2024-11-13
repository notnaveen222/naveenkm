import React from "react";
import InstaIcon from "./about-assets/social-icons/Insta-color.png";
import LinkedInIcon from "./about-assets/social-icons/LinkedIn-color.svg";
import TwitterIcon from "./about-assets/social-icons/X-color.png";
import GitHubBg from "./about-assets/CatThinkingOp.png";
import GitHubIcon from "./about-assets/social-icons/Github.png";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const BentoGrid = () => {
  const cardStylesRight = {
    backgroundImage:
      "radial-gradient( farthest-side at top right, #1f1f1f, #141414)",
  };
  const cardStylesLeft = {
    backgroundImage:
      "radial-gradient( farthest-side at top left, #1f1f1f, #141414)",
  };
  const githubCatBG = {
    backgroundImage: `url(${GitHubBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };
  return (
    <div className="grid w-full h-full grid-cols-10 grid-rows-2 gap-10 text-white ">
      <div
        style={cardStylesRight}
        className="col-span-full row-span-full sm:col-span-5  lg:col-span-5 px-[30px] py-[30px] sm:px-[50px] sm:py-[50px] lg:px-[60px] lg:py-[60px] rounded-[26px] "
      >
        <div className="mb-2 text-2xl font-semibold text-center text-white sm:text-left font-interT">
          Blending Creativity with Functionality
        </div>
        <div className="text-[18px] leading-relaxed text-graya1 text-center sm:text-left font-interT">
          I am a passionate and dedicated freelance designer and developer,
          specializing in creating unique and effective design solutions. With
          extensive experience in web, apps, and branding, as well as UX/UI
          design and WordPress development, I have collaborated with companies
          of all types, both nationally and internationally, ensuring efficiency
          and flexibility in every project.
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-7 grid-rows-2 row-span-2 gap-8 sm:col-span-4 ">
        <div
          style={githubCatBG}
          className="select-none bg-center bg-cover col-span-9 sm:col-span-10 rounded-[26px] row-span-1 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          <div className="flex flex-col justify-between h-full p-5">
            <img className="h-[40px] w-[40px]" src={GitHubIcon} alt="" />
            <div className="flex items-center text-xl font-semibold font-interT">
              <span className="underline underline-offset-4">Github</span>{" "}
              <FiArrowUpRight />
            </div>
          </div>
        </div>
        <div
          style={cardStylesRight}
          className="flex flex-col items-center justify-center col-span-3  sm:col-span-2  gap-7 rounded-[20px]  row-span-1 "
        >
          <img
            className="grayscale ease-in-out hover:grayscale-0 transition-all duration-200 h-[25px] cursor-pointer w-[25px] hover:scale-[1.2]"
            src={LinkedInIcon}
            alt=""
          />
          <img
            className="grayscale ease-in-out cursor-pointer hover:grayscale-0 transition-all duration-200 h-[25px] w-[25px] hover:scale-[1.2]"
            src={InstaIcon}
            alt=""
          />
          <img
            className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer duration-200 ease-in-out h-[25px] w-[25px] hover:scale-[1.2]"
            src={TwitterIcon}
            alt=""
          />
        </div>
        <div
          style={cardStylesLeft}
          className=" rounded-[26px] p-10 col-span-full  text-white"
        >
          <div className="flex "></div>
          <div className="">
            <div className="mb-2 text-2xl font-medium font-interT">
              Area of Expertise
            </div>
            <div className="pl-2 text-lg leading-6 font-inter text-graya1">
              <div>Web Development</div>
              <div>Web Designing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
