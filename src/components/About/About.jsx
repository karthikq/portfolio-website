/** @format */

import React from "react";
import { BsDownload } from "react-icons/bs";
import { Aoslib } from "../Aoslib";
import "./about.styles.scss";
import AboutItem from "./AboutItem";

const About = () => {
  Aoslib();

  return (
    <div className="about-container" id="about">
      <h2 data-aos="fade-right" className="header-tag">
        About Me
      </h2>
      <div className="about-contents">
        <div data-aos="fade-right" className="about-img">
          <img src="" alt="" />
        </div>
        <div className="about-details">
          <p data-aos="fade-up">
            Full stack Web developer with more than 1 year of experience working
            with web technologies and delivering quality content.
          </p>
          <div data-aos="fade-up" className="about-item">
            <AboutItem no="1+" text="Years of experience" />
            <AboutItem no="15+" text="Completed projects" />
          </div>
          <button data-aos="fade-up" className="about-btn">
            <BsDownload /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
