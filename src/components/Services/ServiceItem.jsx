/** @format */

import React from "react";
import { Aoslib } from "../Aoslib";

const ServiceItem = ({ values, id }) => {
  Aoslib();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${500 / id}`}
      className="service-item">
      {values.icon}
      <h5>
        {values.text.split(" ").map((item) => (
          <p style={{ margin: 0 }} key={item}>
            {item}
          </p>
        ))}
      </h5>
      <span>Read more ...</span>
    </div>
  );
};

export default ServiceItem;
