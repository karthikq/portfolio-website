/** @format */

import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import ServiceItem from "./ServiceItem";
import { GrServer } from "react-icons/gr";
import { FaFileVideo } from "react-icons/fa";

import "./services.styles.scss";
import { Aoslib } from "../Aoslib";

const Services = () => {
  return (
    <div className="services-container">
      <h4 className="header-tag">Services</h4>
      <div className="services-contents">
        <ServiceItem
          id={2}
          values={{
            text: "Frontend Development",
            icon: <BiCodeBlock className="service-icon" />,
          }}
        />
        <ServiceItem
          id={2}
          values={{
            text: "Api Development",
            icon: <GrServer className="service-icon" />,
          }}
        />
        <ServiceItem
          id={1}
          values={{
            text: "Video editing",
            icon: <FaFileVideo className="service-icon" />,
          }}
        />
      </div>
    </div>
  );
};

export default Services;
