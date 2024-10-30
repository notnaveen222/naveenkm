import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import LogoLight from "../assets/naveen_logo-95.png";
import LogoDark from "../assets/naveen_logo-95DARK.png";
import DarkThemeIcon from "../assets/svgexport-2.svg";
import WhiteThemeIcon from "../assets/svgexport-1.svg";
import ToggleIcon from "./ToggleIcon";
import { motion } from "framer-motion";
import FloatingNavbar from "./FloatingNavbar";

const Navbar = () => {
  const bodyRef = useRef();
  const logoRef = useRef();
  const ThemeButtonRef = useRef();
  const [darkTheme, setDakTheme] = useState(true);
  const [navbarInview, setNavbarInview] = useState(true);

  useEffect(() => {
    bodyRef.current = document.body;
  }, []);
  const handleThemeToggle = () => {
    bodyRef.current.className === "dark"
      ? ((bodyRef.current.className = "light"),
        logoRef.current.classList.add("invert"),
        ThemeButtonRef.current.classList.add("invert"))
      : ((bodyRef.current.className = "dark"),
        logoRef.current.classList.remove("invert"),
        ThemeButtonRef.current.classList.remove("invert"));
  };

  return (
    <>
      <FloatingNavbar navbarInview={navbarInview} />
      <motion.div
        onViewportEnter={() => {
          setNavbarInview(true);
          console.log("Fixed NB entered");
        }}
        onViewportLeave={() => {
          setNavbarInview(false);
          console.log("Fixed NB entered");
        }}
        className="snap-start h-[70px] border-b-2 border-navbarBottomBorder flex items-center justify-between px-3 md:px-10 xl:px-[300px]"
      >
        <img
          src={LogoLight}
          ref={logoRef}
          alt="Naveen Logo White Theme "
          className="h-[45px] cursor-pointer"
        />
        <div className="hidden cursor-pointer text-navbarButtonText sm:flex satoshi-font gap-x-6">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>

        <ToggleIcon handleThemeChange={handleThemeToggle} />
      </motion.div>
    </>
  );
};

export default Navbar;
