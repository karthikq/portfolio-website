/** @format */

import React, { useEffect } from "react";
import "./Navbar.styles.scss";
import Navbarli from "./Navbarli";

const Navbar = () => {
  const handlePath = () => {
    const path = window.location.hash;
    if (path === "") {
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        <ul>
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
