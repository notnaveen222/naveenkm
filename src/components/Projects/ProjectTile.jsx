import React from "react";
import "./ProjectTile.css";
const ProjectTile = ({ src, hoverColor, pushDown, ProjectMiniInfo }) => {
  return (
    <div
      className={`project-tile overflow-hidden transition-all duration-300 w-[90%] sm:w-full ease-in-out bg-gray14 rounded-3xl relative hover:bg-${hoverColor} ${
        pushDown ? "top-0 lg:top-[50px]" : "top-0"
      }`}
    >
      <img
        className="transition-all duration-300 ease-in-out scale-100 hover:scale-105"
        src={src}
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] text-white  font-inter backdrop-blur-xl  py-2 px-3 sm:p-3 bg-black/30 text-lg sm:text-2xl project-mini-info transition-all duration-200 ease-in-out">
        {ProjectMiniInfo}
      </div>
    </div>
  );
};

export default ProjectTile;
