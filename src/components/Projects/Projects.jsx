import React from "react";
import ProjectTile from "./ProjectTile";
import projectTemplate from "./ProjectTemplate.png";
import GreyBlueButton from "../GeneralComponents/GreyBlueButton/GreyBlueButton";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-screen ">
      <div className="mb-10 text-4xl text-white sm:text-7xl">Projects</div>
      <div className="grid grid-rows-[1fr] lg:grid-cols-[1fr_1fr] gap-y-10 lg:gap-10 mb-[40px] lg:mb-[100px] place-items-center">
        <ProjectTile
          src={projectTemplate}
          hoverColor="white"
          pushDown={false}
          ProjectMiniInfo={"Whatsapp - Social Media App"}
        />
        <ProjectTile
          src={projectTemplate}
          hoverColor="white"
          pushDown={true}
          ProjectMiniInfo={"Whatsapp - Social Media App"}
        />
        <ProjectTile
          src={projectTemplate}
          hoverColor="white"
          pushDown={false}
          ProjectMiniInfo={"Whatsapp - Social Media App"}
        />
        <ProjectTile
          src={projectTemplate}
          hoverColor="white"
          pushDown={true}
          ProjectMiniInfo={"Whatsapp - Social Media App"}
        />
      </div>
      <div className="mb-20">
        <GreyBlueButton title={"View all projects"} />
      </div>
    </div>
  );
};

export default Projects;
/*

<div className="flex overflow-hidden transition-all duration-300 ease-in-out hover:bg-white rounded-3xl bg-gray14">
          <img
            className="transition-all duration-300 ease-in-out scale-100 hover:scale-105"
            src={project1}
            alt=""
          />
        </div>
        <div className="flex overflow-hidden transition-all duration-300 ease-in-out blue-hover rounded-3xl bg-gray14 relative top-[50px]">
          <img
            className="transition-all duration-300 ease-in-out scale-100 hover:scale-105"
            src={project2}
            alt=""
          />
        </div>
        <div className="flex overflow-hidden transition-all duration-300 ease-in-out hover:bg-white rounded-3xl bg-gray14">
          <img
            className="transition-all duration-300 ease-in-out scale-100 hover:scale-105"
            src={project1}
            alt=""
          />
        </div>
        <div className="flex overflow-hidden transition-all duration-300 ease-in-out blue-hover rounded-3xl bg-gray14 relative top-[50px]">
          <img
            className="h-[450px] transition-all duration-300 ease-in-out scale-100 hover:scale-105"
            src={project2}
            alt=""
          />
*/
