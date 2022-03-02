/** @format */

import React from "react";

const ProjectBar = ({ item, setItem, name }) => {
  return (
    <div
      className={
        item === name ? "project-item-headeractive" : "project-item-header"
      }
      onClick={() => setItem(name)}>
      <span>{name}</span>
    </div>
  );
};

export default ProjectBar;
