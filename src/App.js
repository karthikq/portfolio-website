/** @format */

import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/Qualification/Info";
import Services from "./components/Services/Services";
import Skills from "./components/skills/Skills";
import Home from "./pages/Home/Home";
import Project from "./components/projects/Porject";
import Contact from "./components/Contact/Contact";
import Bottomtab from "./components/BottomTab/Bottomtab";

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
      <Contact />
      <Bottomtab />
    </>
  );
}

export default App;
