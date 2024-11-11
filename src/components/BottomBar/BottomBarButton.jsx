import React from "react";

const BottomBarButton = ({ title, icon }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center mt-3 text-[15px] text-white"
      }
    >
      <div className="text-[17px]">{icon}</div>
      <div className="font-interT">{title}</div>
    </div>
  );
};

export default BottomBarButton;
