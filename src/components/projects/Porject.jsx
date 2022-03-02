/** @format */
import React, { useEffect, useState } from "react";
import { ProjectsArray } from "../ProjectsArray";
import ProjectBox from "./ProjectBox";
import "./projects.styles.scss";
import {
  motion,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";
import ProjectBar from "./ProjectBar";

const Porject = () => {
  const [item, setItem] = useState("All");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const res = ProjectsArray.filter((list) => list.keyword.includes(item));

    setResults(res);
  }, [item]);

  return (
    <div className="projects-container">
      <h1 className="header-tag">Projects</h1>
      <div className="projects-contents">
        <div className="projects">
          <header className="projects-contents-header">
            <ProjectBar item={item} setItem={setItem} name="All" />
            <ProjectBar item={item} setItem={setItem} name="React" />
            <ProjectBar item={item} setItem={setItem} name="Mern" />
            <ProjectBar item={item} setItem={setItem} name="Node" />
          </header>
          <motion.div layout className="projects-all">
            <AnimatePresence exitBeforeEnter>
              {results.map((list, index) => (
                <ProjectBox details={list} key={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Porject;
