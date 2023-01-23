/** @format */

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BsGlobe } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const ProjectBox = ({ details }) => {
  const imgRef = useRef();
  console.log("====================================");
  console.log(details);
  console.log("====================================");
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="project-box"
    >
      <div
        className="project-img-box"
        onMouseEnter={() => (imgRef.current.src = details.hoverImg)}
        onMouseLeave={() => (imgRef.current.src = details.img)}
      >
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
        <div className="project-logo">
          <AvatarGroup>
            {details.keyword.map((el) => (
              <>
                {el === "React" && (
                  <Avatar
                    style={{ width: 28, height: 28 }}
                    alt="React"
                    src="https://i.ibb.co/SrZ8zMh/logo-og-1.png"
                  />
                )}
                {el === "Node" && (
                  <Avatar
                    style={{ width: 28, height: 28 }}
                    alt="Node"
                    src="https://i.ibb.co/RvqgMQp/png-transparent-js-logo-node-logos-and-brands-icon.png"
                  />
                )}
                {el === "Nest" && (
                  <Avatar
                    style={{ width: 28, height: 28 }}
                    alt="Nest"
                    src="https://i.ibb.co/qCgfr6q/nestjs-logo-09342-F76-C0-seeklogo-com.png"
                  />
                )}
                {el === "Mongodb" && (
                  <Avatar
                    style={{ width: 28, height: 28 }}
                    alt="Mongodb"
                    src="https://i.ibb.co/MP3hFhX/download.png"
                  />
                )}
                {el === "Postgres" && (
                  <Avatar
                    style={{ width: 28, height: 28 }}
                    alt="Mongodb"
                    src="https://i.ibb.co/Kwb6nG5/Postgresql-elephant-svg-1.png"
                  />
                )}
              </>
            ))}
          </AvatarGroup>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
