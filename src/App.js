/** @format */

import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/Qualification/Info";
import Services from "./components/Services/Services";
import Skills from "./components/skills/Skills";
import Home from "./pages/Home/Home";
import Project from "./components/projects/Porject";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Info />
      <Services />
      <Project />
    </>
  );
}

export default App;
