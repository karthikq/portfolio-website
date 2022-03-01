/** @format */

import React from "react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import "./Bottomtab.styles.scss";

const Bottomtab = () => {
  return (
    <div className="bottom-container">
      <div className="bottom-contents">
        <div className="bottom-profile">
          <h2>Karthik</h2>
          <span>Full stack developer</span>
        </div>
        <div className="bottom-navigate">
          <span>Services</span>
          <span>Portfolio</span>
          <span>Contact me</span>
        </div>
        <div className="bottom-social">
          <BsLinkedin className="bottom-icon" />
          <BsFacebook className="bottom-icon" />
          <BsYoutube className="bottom-icon" />
        </div>
      </div>
    </div>
  );
};

export default Bottomtab;
