import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import FloatingNavbar from "./components/FloatingNavbar";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="h-screen overflow-scroll snap-y snap-proximity">
        <Navbar />
        <div className="h-[1px] snap-end text-bodyBG">.</div>
        <Landing />
        <About />
      </div>
    </>
  );
};

export default App;
App;
