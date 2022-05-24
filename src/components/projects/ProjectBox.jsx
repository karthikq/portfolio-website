/** @format */

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BsGlobe } from "react-icons/bs";

const ProjectBox = ({ details }) => {
  const imgRef = useRef();
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="project-box">
      <div
        className="project-img-box"
        onMouseEnter={() => (imgRef.current.src = details.hoverImg)}
        onMouseLeave={() => (imgRef.current.src = details.img)}>
        <img ref={imgRef} src={details.img} alt="project img" />
      </div>
      <div className="project-desp">
        <motion.div layout className="projectname">
          {details.icon}
          {details.name}
        </motion.div>
        {details.org && (
          <div className="org" title="LYCAN3D">
            <BsGlobe className="org_icon" />
            <span>Organization</span>
          </div>
        )}
        <span>
          {details.desp}
          <a href={details.href} target="_blank" rel="noreferrer">
            Check website
          </a>
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
