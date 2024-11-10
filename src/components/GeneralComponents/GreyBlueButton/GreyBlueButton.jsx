import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const GreyBlueButton = ({ title }) => {
  return (
    <div className="flex items-center gap-2 px-[28px] py-[13px] mt-4 text-lg text-white transition-all duration-200 ease-linear border rounded-full cursor-pointer resume-button border-gray2e bg-gray14">
      {title}
      <div className="arrow">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default GreyBlueButton;
