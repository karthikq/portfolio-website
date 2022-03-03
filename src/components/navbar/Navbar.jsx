/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.styles.scss";
import Navbarli from "./Navbarli";

const Navbar = () => {
  const nav = useRef();
  const nav2 = useRef();
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
    const val = nav2.current.contains(e.target);

    if (!val) {
      setPathValue("");
    }
  });

  return (
    <div ref={nav} className="navbar-container">
      <div ref={nav2} className="navbar-contents">
        <ul className="ul-nav">
          <a
            className={pathValue === "about" ? "li-navactive li" : "li"}
            href="#about"
            onClick={() => setPathValue("about")}>
            <li className="li2">About </li>
          </a>
          <a
            className={pathValue === "services" ? "li-navactive li" : "li"}
            href="#services"
            onClick={() => setPathValue("services")}>
            <li className="li2">Services </li>
          </a>
          <a
            className={pathValue === "portfolio" ? "li-navactive li" : "li"}
            href="#portfolio"
            onClick={() => setPathValue("portfolio")}>
            <li className="li2">Projects </li>
          </a>
          <a
            className={pathValue === "contact" ? "li-navactive li" : "li"}
            href="#contact"
            onClick={() => setPathValue("contact")}>
            <li className="li2">Contact</li>
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
