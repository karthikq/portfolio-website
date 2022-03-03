/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.styles.scss";
import Navbarli from "./Navbarli";

const Navbar = () => {
  const nav = useRef();
  const [pathValue, setPathValue] = useState();

  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 400) {
      nav.current.classList.add("navbar-active");
    }
    if (window.scrollY < 400) {
      nav.current.classList.remove("navbar-active");
    }
  });

  document.addEventListener("click", (e) => {
    // if (e.target.contains(nav)) {
    //   console.log("S");
    // } else {
    //   console.log("s");
    // }
    console.log(e.target.contains("navbar-contents"));
  });

  return (
    <div ref={nav} className="navbar-container">
      <div className="navbar-contents">
        <ul className="ul-nav">
          <a
            className={pathValue === "about" ? "li-navactive" : ""}
            href="#about"
            onClick={() => setPathValue("about")}>
            <li>About </li>
          </a>
          <a
            className={pathValue === "services" ? "li-navactive" : ""}
            href="#services"
            onClick={() => setPathValue("services")}>
            <li>Services </li>
          </a>
          <a
            className={pathValue === "projects" ? "li-navactive" : ""}
            href="#projects"
            onClick={() => setPathValue("projects")}>
            <li>Projects </li>
          </a>
          <a
            className={pathValue === "contact" ? "li-navactive" : ""}
            href="#contact"
            onClick={() => setPathValue("contact")}>
            <li>Contact</li>
          </a>
          {/* <Navbarli pathname={"About"} />
          <Navbarli pathname={"Portfolio"} />
          <Navbarli pathname={"Services"} />
          <Navbarli pathname={"Contact"} /> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
