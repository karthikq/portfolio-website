/** @format */

import React from "react";
import { motion } from "framer-motion";

const ProjectBox = ({ details }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="project-box">
      <p>{details.name}</p>
      <motion.div layout className="project-desp">
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
