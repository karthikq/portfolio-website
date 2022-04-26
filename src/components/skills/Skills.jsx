/** @format */

import React from "react";
import "./skills.styles.scss";

import SkilDropdown from "./SkilDropdown";
import { Aoslib } from "../Aoslib";
import { SkillAccordion } from "../Accordion/Accordion";

const Skills = () => {
  Aoslib();
  return (
    <div className="skill-container">
      <h3 className="header-tag">Skills</h3>
      <div className="skill-contents">
        <SkillAccordion />
        {/* <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="skill-item-left">
          <SkilDropdown name="Frontend developer" state={true} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="skill-item-left">
          <SkilDropdown name="Backend developer" state={false} />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
