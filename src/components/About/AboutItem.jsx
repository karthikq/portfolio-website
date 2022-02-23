/** @format */

import React from "react";

const AboutItem = ({ no, text }) => {
  return (
    <div className="about-item-details">
      <h3>{no}</h3>
      <span>{text}</span>
    </div>
  );
};

export default AboutItem;
