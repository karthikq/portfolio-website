/** @format */

import React, { useState } from "react";
import "./skills.styles.scss";
import { IoIosClose } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Skills = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <div className="skill-container">
      <h3 className="header-tag">Skills</h3>
      <div className="skill-contents">
        <div className="skill-item-left">
          <div
            className={
              openState
                ? "skill-item-box skill-item-box-active"
                : "skill-item-box"
            }>
            <div className="skill-icons">
              {openState ? (
                <IoIosClose
                  className="skill-icon"
                  onClick={() => setOpenState(false)}
                />
              ) : (
                <BsThreeDots
                  className="skill-icon"
                  onClick={() => setOpenState(true)}
                />
              )}
            </div>
            <h4 className={openState ? "h4-active" : ""}>Frontend developer</h4>
            <div className="skill-details">
              <div
                style={
                  openState
                    ? { animation: "animatepadding 0.8s ease forwards" }
                    : { animation: "animatepadding2 0.8s ease forwards" }
                }
                className={openState ? "skill skill-active" : "skill"}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="err"
                />
                <span>JavaScript</span>
              </div>
              <div
                style={
                  openState
                    ? { animation: "animatepadding 0.8s ease forwards" }
                    : { animation: "animatepadding2 0.8s ease forwards" }
                }
                className={openState ? "skill skill-active" : "skill"}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="err"
                />
                <span>JavaScript</span>
              </div>{" "}
              <div
                style={
                  openState
                    ? { animation: "animatepadding 0.8s ease forwards" }
                    : { animation: "animatepadding2 0.8s ease forwards" }
                }
                className={openState ? "skill skill-active" : "skill"}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="err"
                />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-item-left">
          <div className="skill-item-box"></div> <h4>Frontend developer</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
