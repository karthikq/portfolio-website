/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./home.styles.scss";
import { BsLinkedin, BsGithub, BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

import BIRDS from "vanta/dist/vanta.waves.min";
import { navContextobject } from "../../components/context/NavContext";

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
  const { state } = React.useContext(navContextobject);

  return (
    <div
      ref={ref}
      className={
        state ? "home-container home-container-acitve" : "home-container"
      }
      id="home">
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
        </motion.span>{" "}
        <motion.div
          {...fadeIn}
          transition={{ duration: 1, easings: "anticipate" }}
          className="home-icons">
          <a
            rel="noreferrer"
            href="https://github.com/karthikq"
            target="_blank">
            <BsGithub className="home-github" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/karthik-j-suvarna-84879a83/"
            target="_blank">
            <BsLinkedin className="home-linkedin" />
          </a>
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
