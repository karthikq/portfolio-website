/** @format */

import React from "react";
import { BsDownload } from "react-icons/bs";
import "./about.styles.scss";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="header-tag">About Me</h2>
      <div className="about-contents">
        <div className="about-img">
          <img src="" alt="" />
        </div>
        <div className="about-details">
          <p>
            Full stack Web developer with more than 1 year of experience working
            with web technologies and delivering quality content.
          </p>
          <div className="about-item">
            <AboutItem no="1+" text="Years of experience" />
            <AboutItem no="15+" text="Completed projects" />
          </div>
          <button className="about-btn">
            <BsDownload /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
