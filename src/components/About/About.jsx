/** @format */

import React from "react";
import { BsDownload } from "react-icons/bs";
import { Aoslib } from "../Aoslib";
import "./about.styles.scss";
import AboutItem from "./AboutItem";
import pdf from "./res.pdf";

const About = () => {
  Aoslib();

  return (
    <div className="about-container" id="about">
      <h2 data-aos="fade-right" className="header-tag">
        About Me
      </h2>
      <div className="about-contents">
        <div data-aos="fade-up" className="about-img">
          <img
            src="https://i.ibb.co/FBkSDXB/karthik-js-karthik-j-suvarna-Instagram-photos-and-videos-1.png"
            alt="profile"
          />
        </div>
        <div data-aos="fade-up" className="about-details">
          <p>
            Full stack Web developer with years of experience working with web
            technologies and delivering quality content.
          </p>
          <div className="about-item">
            <AboutItem no="3+" text="Years of experience" />
            <AboutItem no="40+" text="Completed projects" />
          </div>{" "}
          <a href={pdf} download="karthikresume">
            <button className="about-btn">
              <BsDownload /> Download CV
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
