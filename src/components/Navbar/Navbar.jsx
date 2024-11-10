import React from "react";
import naveenLogo from "../../assets/naveen-logo.png";
import FlippingText from "./FlippingText";
const Navbar = () => {
  return (
    <div className="z-10 fixed w-full px-[30px] pt-[10px]">
      <div className="backdrop-blur-xl  text-white  w-full rounded-full top-2 h-[60px] px-[30px] flex justify-between items-center">
        <img className="h-10" src={naveenLogo} alt="" />
        <div className="flex text-[15px] font-medium font-interT gap-x-6 ">
          <FlippingText title={"Home"} />
          <FlippingText title={"About"} />
          <FlippingText title={"Projects"} />
          <FlippingText title={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
