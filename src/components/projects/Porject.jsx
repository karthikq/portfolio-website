/** @format */
import React, { useState } from "react";
import "./projects.styles.scss";

const Porject = () => {
  const [item, setItem] = useState("React");

  return (
    <div className="projects-container">
      <h1 className="header-tag">Projects</h1>
      <div className="projects-contents">
        <div className="projects">
          <header className="projects-contents-header">
            <div
              className={
                item === "React"
                  ? "project-item-headeractive"
                  : "project-item-header"
              }
              onClick={() => setItem("React")}>
              <span>React</span>
            </div>
            <div
              className={
                item === "Node"
                  ? "project-item-headeractive"
                  : "project-item-header"
              }
              onClick={() => setItem("Node")}>
              <span>Node</span>
            </div>
            <div
              className={
                item === "Mern"
                  ? "project-item-headeractive"
                  : "project-item-header"
              }
              onClick={() => setItem("Mern")}>
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
