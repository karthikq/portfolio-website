/** @format */

import React, { useEffect, useState } from "react";

const InfoItem = ({ data, inView, state }) => {
  return (
    <div
      className="info-item"
      style={
        inView
          ? {
              animation: "animateCircle 1s ease forwards",
              animationDelay: data.id / 5 + "s",
            }
          : {
              animation: "animateCircle 1s ease forwards",
              animationDelay: data.id / 5 + "s",
            }
      }>
      <svg
        className="circle"
        width="18"
        height="18"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="9.5" r="9.5" fill="#E754BD" />
      </svg>
      <h6>{data.header}</h6>
      <span>{data.inst}</span>
      <span className="info-span2">{data.year}</span>
    </div>
  );
};

export default InfoItem;
