/** @format */

import React from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
