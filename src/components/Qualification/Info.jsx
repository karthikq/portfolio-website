/** @format */

import React, { useEffect, useState } from "react";
import "./info.styles.scss";
import { useInView } from "react-intersection-observer";
import { AiOutlineRead } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

import InfoItem from "./InfoItem";

const Info = () => {
  const [selectState, setSelectState] = useState("Work");

  useEffect(() => {}, [selectState]);
  const { inView, ref } = useInView({
    threshold: 0,
  });

  return (
    <div className="info-container">
      <h5 className="header-tag">Qualification</h5>
      <div ref={ref} className="info-contents">
        <div className="info-contents-header">
          <h4
            onClick={() => setSelectState("Education")}
            className={
              selectState === "Education" ? "info-h4active" : "info-h4"
            }
          >
            <AiOutlineRead className="info-icon" />
            Education
          </h4>

          <h4
            onClick={() => setSelectState("Work")}
            className={selectState === "Work" ? "info-h4active" : "info-h4"}
          >
            <MdWorkOutline className="info-icon" /> Work
          </h4>
        </div>
        <div className="info-list">
          <div className="info-centerline"></div>
          {selectState === "Education" ? (
            <React.Fragment>
              <InfoItem
                state={inView}
                data={{
                  header: "B.E Mechanical Engg",
                  inst: "NMAMIT",
                  year: "2016-2020",
                  id: 1,
                }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <InfoItem
                state={inView}
                data={{
                  header: "React Developer",
                  inst: "SUVENTURE SERVICES",
                  year: "2022-2023",
                  info: "Here we were providing services to BQ prime news web site, which used QuintType CMS .Here I worked on frontend to fix bugs as well and creating custom page. And I also worked on creating web stories using AMP",
                  id: 1,
                }}
              />
              <InfoItem
                state={inView}
                data={{
                  header: "Full Stack Developer",
                  inst: "LYCAN 3D",
                  year: "2021-2022",
                  info: "Developed web application using MERN stack technology, and tested web application's using Node Js & JavaScript and deployed them to Heroku and Netlify.",
                  id: 2,
                }}
              />
              <InfoItem
                state={inView}
                data={{
                  header: "Worked on 30+ projects",
                  inst: "ONLINE",
                  year: "2020-2021",
                  id: 3,
                }}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
