/** @format */

import React, { useEffect } from "react";
import "./Navbar.styles.scss";
import Navbarli from "./Navbarli";

const Navbar = () => {
  useEffect(() => {
    console.log(window.scrollY);
  });
  return (
    <div className="navbar-container">
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
