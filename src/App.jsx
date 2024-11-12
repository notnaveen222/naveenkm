import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <div className="w-screen h-screen bg-gray-500">Sect2</div>
    </div>
  );
};

export default App;
