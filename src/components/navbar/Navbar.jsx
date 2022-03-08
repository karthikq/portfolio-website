/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./Navbar.styles.scss";
import { navContextobject } from "../context/NavContext";

const Navbar = () => {
  const nav = useRef();
  const nav2 = useRef();
  const ref2 = useRef();

  const { state, update } = React.useContext(navContextobject);

  const [pathValue, setPathValue] = useState();
  const [navState, setNavState] = useState(false);

  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 400) {
      nav.current.classList.add("navbar-active");
      ref2.current.style.backgroundColor = "transparent";
    }
    if (window.scrollY < 400) {
      nav.current.classList.remove("navbar-active");
      ref2.current.style.backgroundColor = "white";
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
  const setValue = (value) => {
    setPathValue(value);
    update(false);
  };
  return (
    <div
      ref={nav}
      className={
        state ? "navbar-container navbar-container-mobile" : "navbar-container"
      }>
      <div
        ref={ref2}
        onClick={() => update(!state)}
        className={
          state ? "nav-mobileicon nav-mobileicon-active" : "nav-mobileicon"
        }>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div ref={nav2} className="navbar-contents">
        <ul className="ul-nav">
          <a
            className={pathValue === "about" ? "li-navactive li" : "li"}
            href="#about"
            onClick={() => setValue("about")}>
            <li className="li2">About </li>
          </a>
          <a
            className={pathValue === "services" ? "li-navactive li" : "li"}
            href="#services"
            onClick={() => setValue("services")}>
            <li className="li2">Services </li>
          </a>
          <a
            className={pathValue === "portfolio" ? "li-navactive li" : "li"}
            href="#portfolio"
            onClick={() => setValue("portfolio")}>
            <li className="li2">Projects </li>
          </a>
          <a
            className={pathValue === "contact" ? "li-navactive li" : "li"}
            href="#contact"
            onClick={() => setValue("contact")}>
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
