import React from "react";
import BottomBarButton from "./BottomBarButton";
import { FaHome } from "react-icons/fa";
import { PiGridFourFill } from "react-icons/pi";
import { MdEmojiEmotions } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";

const MobileBottomBar = ({ visible }) => {
  return (
    <div
      className={
        "transition-all z-10 fixed  inline left-0 right-0  h-[60px] sm:hidden bg-BodyBGBlack/80 " +
        `${visible ? "bottom-0" : "-bottom-[70px]"}`
      }
    >
      <div className="flex items-center justify-center gap-8">
        <BottomBarButton title={"Home"} icon={<FaHome />} />
        <BottomBarButton title={"Projects"} icon={<PiGridFourFill />} />
        <BottomBarButton title={"About"} icon={<MdEmojiEmotions />} />
        <BottomBarButton title={"Contact"} icon={<BiLogoTelegram />} />
      </div>
    </div>
  );
};

export default MobileBottomBar;
