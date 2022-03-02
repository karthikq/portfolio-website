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
import { useInView } from "react-intersection-observer";

const Porject = () => {
  const [item, setItem] = useState("All");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const res = ProjectsArray.filter((list) => list.keyword.includes(item));

    setResults(res);
  }, [item]);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="projects-container" id="portfolio">
      <h1 className="header-tag">Projects</h1>
      <div ref={ref} className="projects-contents">
        <div className="projects">
          <header className="projects-contents-header">
            <ProjectBar
              inView={inView}
              item={item}
              setItem={setItem}
              name="All"
              id={1}
            />
            <ProjectBar
              inView={inView}
              item={item}
              setItem={setItem}
              name="React"
              id={2}
            />
            <ProjectBar
              inView={inView}
              item={item}
              setItem={setItem}
              name="Mern"
              id={3}
            />
            <ProjectBar
              inView={inView}
              item={item}
              setItem={setItem}
              name="Node"
              id={4}
            />
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
