/** @format */

import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import ServiceItem from "./ServiceItem";
import { GrServer } from "react-icons/gr";
import { FaFileVideo } from "react-icons/fa";

import "./services.styles.scss";
import { AnimateSharedLayout } from "framer-motion";

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h4 className="header-tag">Services</h4>
      <AnimateSharedLayout type="crossfade">
        <div className="services-contents">
          <ServiceItem
            id={1}
            state="frontend"
            values={{
              text: "Frontend Development",
              icon: <BiCodeBlock className="service-icon" />,
            }}
          />
          <ServiceItem
            id={2}
            state="backend"
            values={{
              text: "Api Development",
              icon: <GrServer className="service-icon" />,
            }}
          />
          <ServiceItem
            id={3}
            state="other"
            values={{
              text: "Video editing",
              icon: <FaFileVideo className="service-icon" />,
            }}
          />
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Services;
