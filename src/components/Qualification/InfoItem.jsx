/** @format */

import React, { useEffect, useState } from "react";

const InfoItem = ({ data, state }) => {
  // const { inView, ref } = useInView({
  //   threshold: 0,
  // });

  return (
    <div
      className="info-item"
      style={
        state
          ? {
              animation: "animateCircle 1s ease forwards",
              animationDelay: `${data.id / 6}s`,
            }
          : {}
      }
    >
      <svg
        className="circle"
        width="18"
        height="18"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.5" cy="9.5" r="9.5" fill="#119dfa" />
      </svg>
      <h6>{data.header}</h6>
      <span className="work-inst">{data.inst}</span>
      <div
        className={
          data.id % 2 === 0 ? "work-info right-el" : "work-info left-el"
        }
      >
        <span>{data.info}</span>
      </div>

      <span className="info-span2">{data.year}</span>
    </div>
  );
};

export default InfoItem;
