/** @format */

import React from "react";
import "./home.styles.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-contents">
        <h1 className="home-h1">Hey I'm Karthik</h1>
        <span className="home-span">Full stack web developer</span>
        <div className="home-icons">
          <BsLinkedin className="home-linkedin" />
          <BsGithub className="home-github" />
        </div>
      </div>
    </div>
  );
};

export default Home;
