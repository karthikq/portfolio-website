/** @format */

import React from "react";
import { useState } from "react";

import SkillDropdownitem from "./SkillDropdownitem";
import { BiCode, BiServer } from "react-icons/bi";

const SkilDropdown = ({ name, state }) => {
  const [openState, setOpenState] = useState(false);
  return (
    <div
      className={
        openState ? "skill-item-box skill-item-box-active" : "skill-item-box"
      }>
      <div
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
      </h4>
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
        {state ? (
          <React.Fragment>
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl:
                  "https://i.ibb.co/Wpb5yc0/1024px-Unofficial-Java-Script-logo-2-1.png",
                text: "JavaScript",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/0Q14dtb/logo-og-1.png",
                text: "React",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/RvxJV8Y/PgcSR-1.png",
                text: "HTML",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/s3R21bb/logo-2582747-1280-1.png",
                text: "CSS",
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl:
                  "https://i.ibb.co/931Z93k/node-js-nodejs-number-symbol-text-recycling-symbol-transparent-png-1383018.png",
                text: "Node js",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/bvjvqVz/Mongo-DB-Emblem.jpg",
                text: "Mongo DB",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/CHyDRv6/a-Jp7n-Odu-400x400.jpg",
                text: "Redis",
              }}
            />
            <SkillDropdownitem
              openState={openState}
              data={{
                imgUrl: "https://i.ibb.co/T0p1XBm/Express-JS-logo.png",
                text: "Express js",
              }}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SkilDropdown;
