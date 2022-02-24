/** @format */

import React from "react";
import "./info.styles.scss";
import { AiOutlineRead } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

const Info = () => {
  return (
    <div className="info-container">
      <h5 className="header-tag">Qualification</h5>
      <div className="info-contents">
        <div className="info-contents-header">
          <h4>
            <AiOutlineRead className="info-icon" />
            Education
          </h4>
          <h4>
            <MdWorkOutline className="info-icon" /> Work
          </h4>
        </div>
        <div className="info-list">
          <div className="info-item">
            <h6>B.E Mechanical Engg</h6>
            <span>NMAMIT</span>
            <span className="info-span2">2016-2020</span>
          </div>
          <div className="info-item">
            <h6>B.E Mechanical Engg</h6>
            <span>NMAMIT</span>
            <span className="info-span2">2016-2020</span>
          </div>
          <div className="info-item">
            <h6>B.E Mechanical Engg</h6>
            <span>NMAMIT</span>
            <span className="info-span2">2016-2020</span>
          </div>
          <div className="info-item">
            <h6>B.E Mechanical Engg</h6>
            <span>NMAMIT</span>
            <span className="info-span2">2016-2020</span>
          </div>
          <div className="info-item">
            <h6>B.E Mechanical Engg</h6>
            <span>NMAMIT</span>
            <span className="info-span2">2016-2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
