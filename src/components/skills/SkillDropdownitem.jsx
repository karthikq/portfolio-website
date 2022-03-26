/** @format */

import React from "react";

const SkillDropdownitem = ({ openState, data }) => {
  return (
    <div className="skill-list">
      <svg
        width="3"
        style={
          openState
            ? { animation: "animatepadding 0.8s ease forwards" }
            : { animation: "animatepadding2 0.8s ease forwards" }
        }
        viewBox="0 0 3 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <line
          x1="1.5"
          y1="6.55671e-08"
          x2="1.5"
          y2="32"
          stroke="#119dfa"
          stroke-width="3"
        />
      </svg>
      <div
        className="skill-data"
        style={openState ? { animation: "fadeIn 1s ease" } : {}}>
        <img src={data.imgUrl} alt="err" />

        <span>{data.text}</span>
      </div>
    </div>
  );
};

export default SkillDropdownitem;
