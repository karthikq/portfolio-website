/** @format */

import React from "react";
import { motion } from "framer-motion";

const ProjectBox = ({ details }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
      className="project-box">
      <p>{details.name}</p>
      <motion.div className="project-desp">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
          repudiandae nobis ipsa accusamus accusantium distinctio sunt deserunt
          qui enim?
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;
