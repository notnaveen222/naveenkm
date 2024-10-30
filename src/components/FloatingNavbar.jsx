import React, { useEffect, useRef, useState } from "react";
import LogoLight from "../assets/naveen_logo-95.png";
import ToggleIcon from "./ToggleIcon";
import { motion } from "framer-motion";

const FloatingNavbar = ({ navbarInview }) => {
  const bodyRef = useRef();
  const logoRef = useRef();
  const ThemeButtonRef = useRef();
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
    <motion.div
      initial={{ opacity: 0.8, y: -120 }}
      animate={{
        y: navbarInview ? -120 : 0,
        opacity: navbarInview ? 0.8 : 1,
      }}
      exit={{
        y: -120,
        opacity: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.2,
      }}
      className="h-[70px] flex justify-between items-center px-5 top-5 w-9/12 mx-[13%] sm:w-7/12 sm:mx-[20.5%] fixed bg-floatingNavbarBG  backdrop-blur-sm rounded-full md:px-10 lg:px-20"
    >
      <img
        src={LogoLight}
        ref={logoRef}
        alt="Naveen Logo White Theme "
        className="h-[45px] cursor-pointer"
      />
      <div className="hidden cursor-pointer text-navbarButtonText md:flex satoshi-font gap-x-6">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <ToggleIcon handleThemeChange={handleThemeToggle} />
    </motion.div>
  );
};

export default FloatingNavbar;
