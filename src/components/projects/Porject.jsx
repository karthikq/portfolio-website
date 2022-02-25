/** @format */
import React from "react";
import "./projects.styles.scss";

const Porject = () => {
  return (
    <div className="projects-container">
      <h1 className="header-tag">Projects</h1>
      <div className="projects-contents">
        <div className="projects">
          <header className="projects-contents-header">
            <div className="project-item-header">
              <span>React</span>
            </div>
            <div className="project-item-header">
              <span>Node</span>
            </div>
            <div className="project-item-header">
              <span>Mern</span>
            </div>
          </header>
          <div className="projects-list">
            <div className="project-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porject;
