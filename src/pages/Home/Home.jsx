/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./home.styles.scss";
import {
  BsLinkedin,
  BsGithub,
  BsArrowUpCircle,
  BsArrowDownCircle,
} from "react-icons/bs";
import { motion } from "framer-motion";

import BIRDS from "vanta/dist/vanta.waves.min";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ref.current,
          color: 0x101316,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
    <div ref={ref} className="home-container" id="home">
      <div className="home-contents">
        <motion.h1
          {...fadeIn}
          transition={{ duration: 1, easings: "anticipate" }}
          className="home-h1">
          Hey I'm Karthik
        </motion.h1>
        <motion.span
          {...fadeIn}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1, delay: 0.4, easings: "anticipate" }}
          className="home-span">
          Full stack web developer
        </motion.span>
        <motion.div
          {...fadeIn}
          transition={{ duration: 1, easings: "anticipate" }}
          className="home-icons">
          <BsLinkedin className="home-linkedin" />
          <BsGithub className="home-github" />
        </motion.div>
        <motion.div
          {...fadeIn}
          transition={{ duration: 1, easings: "anticipate" }}
          className="scroll-div">
          <a href="#about">
            <BsArrowDownCircle className="scroll-icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
