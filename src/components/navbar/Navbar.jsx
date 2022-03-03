/** @format */

import React, { useEffect, useRef } from "react";
import "./Navbar.styles.scss";
import Navbarli from "./Navbarli";

const Navbar = () => {
  const nav = useRef();

  document.addEventListener("scroll", (e) => {
    const contains = nav.current.classList.contains("navbar-active");

    if (window.scrollY > 400) {
      nav.current.classList.add("navbar-active");
    }
    if (window.scrollY <= 400) {
      nav.current.classList.remove("navbar-active");
    }
  });
  return (
    <div ref={nav} className="navbar-container">
      <div className="navbar-contents">
        <ul className="ul-nav">
          <Navbarli pathname={"About"} />
          <Navbarli pathname={"Portfolio"} />
          <Navbarli pathname={"Services"} />
          <Navbarli pathname={"Contact"} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
