/** @format */

import React from "react";
import "./home.styles.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="home-container">
      <div className="home-contents">
        <motion.h1
          {...fadeIn}
          transition={{ duration: 1, easings: "anticipate" }}
          className="home-h1">
          Hey I'm Karthik
        </motion.h1>
        <motion.span
          {...fadeIn}
          transition={{ duration: 1, delay: 0.4, easings: "anticipate" }}
          className="home-span">
          Full stack web developer
        </motion.span>
        <div className="home-icons">
          <BsLinkedin className="home-linkedin" />
          <BsGithub className="home-github" />
        </div>
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
};

export default Home;
