import React from "react";
import BottomBarButton from "./BottomBarButton";
import { GoHome } from "react-icons/go";
import { BsGrid1X2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
const MobileBottomBar = ({ visible }) => {
  return (
    <div
      className={
        "transition-all z-10 fixed  inline left-0 right-0  h-[60px] sm:hidden bg-BodyBGBlack/80 " +
        `${visible ? "bottom-0" : "-bottom-[70px]"}`
      }
    >
      <div className="flex items-center justify-center gap-8">
        <BottomBarButton title={"Home"} icon={<GoHome />} />
        <BottomBarButton title={"Projects"} icon={<BsGrid1X2 />} />
        <BottomBarButton title={"About"} icon={<FiUser />} />
        <BottomBarButton title={"Contact"} icon={<LiaTelegram />} />
      </div>
    </div>
  );
};

export default MobileBottomBar;
