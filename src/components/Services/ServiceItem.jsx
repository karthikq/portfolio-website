/** @format */

import React from "react";

const ServiceItem = ({ values }) => {
  return (
    <div className="service-item">
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
