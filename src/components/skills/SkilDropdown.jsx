/** @format */

import React from "react";
import { useState } from "react";

import SkillDropdownitem from "./SkillDropdownitem";
import { BiCode, BiServer } from "react-icons/bi";

const SkilDropdown = ({ name, state, openState, openState2 }) => {
  return (
    <div
      className={
        openState ? "skill-item-box skill-item-box-active" : "skill-item-box"
      }>
      {/* <div
        onClick={() => setOpenState(!openState)}
        className={
          openState ? "skill-icons skill-icons-active" : "skill-icons"
        }>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h4 className={openState ? "skill-h4 h4-active" : "skill-h4"}>
        {state ? (
          <BiCode className="code-icon" />
        ) : (
          <BiServer className="code-icon code-icon2" />
        )}{" "}
        {name}
      </h4> */}
      <div className="skill-details">
        {/* <div
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
            </div> */}
        {state === "frontend" && (
          <React.Fragment>
            <SkillDropdownitem
              openState={openState}
              itemClass=""
              data={{
                imgUrl: "https://i.ibb.co/RvxJV8Y/PgcSR-1.png",
                text: "HTML",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              itemClass="skill-no_line"
              data={{
                imgUrl: "https://i.ibb.co/s3R21bb/logo-2582747-1280-1.png",
                text: "CSS",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              itemClass=""
              data={{
                imgUrl:
                  "https://i.ibb.co/Wpb5yc0/1024px-Unofficial-Java-Script-logo-2-1.png",
                text: "JavaScript",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              itemClass=""
              data={{
                imgUrl: "https://i.ibb.co/0Q14dtb/logo-og-1.png",
                text: "React",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              itemClass=""
              data={{
                imgUrl: "https://i.ibb.co/KK4XBX4/Redux.png",
                text: "Redux",
              }}
            />
          </React.Fragment>
        )}
        {state === "backend" && (
          <React.Fragment>
            <SkillDropdownitem
              openState={openState2}
              itemClass=""
              data={{
                imgUrl:
                  "https://i.ibb.co/931Z93k/node-js-nodejs-number-symbol-text-recycling-symbol-transparent-png-1383018.png",
                text: "Node js",
              }}
            />
            <SkillDropdownitem
              openState={openState2}
              itemClass=""
              data={{
                imgUrl: "https://i.ibb.co/bvjvqVz/Mongo-DB-Emblem.jpg",
                text: "Mongo DB",
              }}
            />
            <SkillDropdownitem
              openState={openState2}
              itemClass=""
              data={{
                imgUrl:
                  "https://i.ibb.co/7CcjHvL/146-1469802-logo-logo-docker.jpg",
                text: "Docker",
              }}
            />
            <SkillDropdownitem
              openState={openState2}
              itemClass="skill-no_line"
              data={{
                imgUrl: "https://i.ibb.co/34cRG0c/express-js-tutorial.png",
                text: "Express js",
              }}
            />{" "}
            <SkillDropdownitem
              openState={openState2}
              itemClass="skill-no_line"
              data={{
                imgUrl:
                  "https://i.ibb.co/C2NWpk1/png-clipart-postgresql-database-logo-application-software-computer-software-mysql-logo-blue-text.png",
                text: "PostgreSQL",
              }}
            />{" "}
            <SkillDropdownitem
              openState={openState2}
              itemClass="skill-no_line"
              data={{
                imgUrl: "https://i.ibb.co/JrZB1MW/aws-logo-smile-1200x630.png",
                text: "Aws EC2",
              }}
            />
          </React.Fragment>
        )}
        {state === "other" && (
          <React.Fragment>
            <SkillDropdownitem
              itemClass="skill-no_line"
              data={{
                imgUrl: "https://i.ibb.co/9y0vLwt/Adobe-Photoshop-Logo.png",
                text: "Photoshop",
              }}
            />{" "}
            <SkillDropdownitem
              itemClass="skill-no_line"
              data={{
                imgUrl:
                  "https://i.ibb.co/syT61Xr/Adobe-Premiere-Pro-Logo-svg.png",
                text: "Premier pro",
              }}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SkilDropdown;
