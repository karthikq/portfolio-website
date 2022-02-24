/** @format */

import React from "react";
import "./skills.styles.scss";

import SkilDropdown from "./SkilDropdown";

const Skills = () => {
  return (
    <div className="skill-container">
      <h3 className="header-tag">Skills</h3>
      <div className="skill-contents">
        <div className="skill-item-left">
          <SkilDropdown name="Frontend developer" state={true} />
        </div>
        <div className="skill-item-left">
          <SkilDropdown name="Backend developer" state={false} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
