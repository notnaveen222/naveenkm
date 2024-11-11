import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import MobileBottomBar from "../BottomBar/MobileBottomBar";
const HamburgerMenu = ({ isOpen, setOpen }) => {
  //const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="sm:hidden">
        <Hamburger
          direction="right"
          rounded
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </>
  );
};

export default HamburgerMenu;
