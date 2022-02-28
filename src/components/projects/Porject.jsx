/** @format */
import React, { useEffect, useState } from "react";
import { ProjectsArray } from "../ProjectsArray";
import ProjectBox from "./ProjectBox";
import "./projects.styles.scss";
import {
  AnimatePresence,
  motion,
  LazyMotion,
  domAnimation,
} from "framer-motion";

const Porject = () => {
  const [item, setItem] = useState("React");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const result = ProjectsArray.filter((data) => data.skill === item);

    setResults(result[0].data);
  }, [item]);

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
          <motion.div layout className="projects-list">
            <AnimatePresence exitBeforeEnter>
              {results.map((list, index) => (
                <ProjectBox details={list} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Porject;
