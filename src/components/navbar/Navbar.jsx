/** @format */

import React from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        <ul>
          <a href="#about">
            <li>About</li>
          </a>

          <a href="#portfolio">
            <li>Portfolio </li>
          </a>
          <a href="#services">
            <li>Services </li>
          </a>

          <a href="#contact">
            <li>Contact </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
