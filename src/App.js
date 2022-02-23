/** @format */

import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
