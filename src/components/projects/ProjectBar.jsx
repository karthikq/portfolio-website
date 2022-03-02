/** @format */

import React from "react";
import { motion } from "framer-motion";

const ProjectBar = ({ item, setItem, name, inView, id }) => {
  console.log(inView);
  return (
    <motion.div
      layout
      initial={inView ? { opacity: 0 } : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: "anticipate", delay: `${id / 4}` }}
      className={
        item === name ? "project-item-headeractive" : "project-item-header"
      }
      onClick={() => setItem(name)}>
      <span>{name}</span>
    </motion.div>
  );
};

export default ProjectBar;
