import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <div className="w-screen h-screen bg-gray-500">Sect2</div>
    </div>
  );
};

export default App;
