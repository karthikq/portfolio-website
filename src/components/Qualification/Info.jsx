/** @format */

import React, { useEffect, useState } from "react";
import "./info.styles.scss";
import { useInView } from "react-intersection-observer";
import { AiOutlineRead } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

import InfoItem from "./InfoItem";

const Info = () => {
  const [selectState, setSelectState] = useState("Education");
  const [inView2, setInView] = useState(false);

  useEffect(() => {
    if (selectState === "Education") setInView(true);
    else setInView(false);
  }, [selectState]);

  return (
    <div className="info-container">
      <h5 className="header-tag">Qualification</h5>
      <div className="info-contents">
        <div className="info-contents-header">
          <h4
            onClick={() => setSelectState("Education")}
            className={
              selectState === "Education" ? "info-h4active" : "info-h4"
            }>
            <AiOutlineRead className="info-icon" />
            Education
          </h4>
          <h4
            onClick={() => setSelectState("Work")}
            className={selectState === "Work" ? "info-h4active" : "info-h4"}>
            <MdWorkOutline className="info-icon" /> Work
          </h4>
        </div>
        <div className="info-list">
          <div className="info-centerline"></div>
          {inView2 ? (
            <React.Fragment>
              <InfoItem
                state={selectState}
                data={{
                  header: "B.E Mechanical Engg",
                  inst: "NMAMIT",
                  year: "2016-2020",
                  id: 1,
                }}
              />
              <InfoItem
                state={selectState}
                data={{
                  header: "Web development Bootcamp",
                  inst: "UDEMY",
                  year: "2020-2021",
                  id: 2,
                }}
              />
              <InfoItem
                state={selectState}
                data={{
                  header: "Modern React & Redux",
                  inst: "UDEMY",
                  year: "2020-2021",
                  id: 3,
                }}
              />
              <InfoItem
                state={selectState}
                data={{
                  header: "SQL Bootcamp 2022",
                  inst: "UDEMY",
                  year: "2021-2022",
                  id: 4,
                }}
              />
              <InfoItem
                state={selectState}
                data={{
                  header: "Blockchain development",
                  inst: "UDEMY",
                  year: "2020-2021",
                  id: 5,
                }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <InfoItem
                state={selectState}
                data={{
                  header: "Full Stack Developer",
                  inst: "LYCAN 3D",
                  year: "2020-2021",
                  id: 1,
                }}
              />
              <InfoItem
                state={selectState}
                data={{
                  header: "Worked on 15+ projects",
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
