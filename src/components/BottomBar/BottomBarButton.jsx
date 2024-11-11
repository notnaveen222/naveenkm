import React from "react";

const BottomBarButton = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-3 text-[15px] text-white font-inter">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default BottomBarButton;
