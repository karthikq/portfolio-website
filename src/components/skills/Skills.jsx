/** @format */

import React from "react";
import "./skills.styles.scss";

import SkilDropdown from "./SkilDropdown";
import { Aoslib } from "../Aoslib";

const Skills = () => {
  Aoslib();
  return (
    <div className="skill-container">
      <h3 className="header-tag">Skills</h3>
      <div className="skill-contents">
        <div data-aos="fade-right" className="skill-item-left">
          <SkilDropdown name="Frontend developer" state={true} />
        </div>
        <div data-aos="fade-left" className="skill-item-left">
          <SkilDropdown name="Backend developer" state={false} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
