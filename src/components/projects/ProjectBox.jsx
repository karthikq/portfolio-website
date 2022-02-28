/** @format */

import React from "react";
import { motion } from "framer-motion";

const ProjectBox = ({ details }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="project-box">
      <p>{details.name}</p>
      <div className="project-desp">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
          repudiandae nobis ipsa accusamus accusantium distinctio sunt deserunt
          qui enim?
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
