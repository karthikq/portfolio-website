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
      className="project-box">
      <img src={details.img} alt="project img" />
      <div className="project-desp">
        <motion.div layout className="projectname">
          {details.icon}
          {details.name}
        </motion.div>
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
