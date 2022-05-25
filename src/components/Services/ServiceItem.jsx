/** @format */

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { Aoslib } from "../Aoslib";
import { SelService } from "./SelService";
import { motion } from "framer-motion";
const ServiceItem = ({ values, id, state }) => {
  Aoslib();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <React.Fragment>
      <motion.div className="service-item">
        {values.icon}
        <motion.h5>
          {values.text.split(" ").map((item) => (
            <p style={{ margin: 0 }} key={item}>
              {item}
            </p>
          ))}
        </motion.h5>
        <span onClick={() => setSelectedId(id)}>Read more ...</span>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <SelService selectedId={selectedId} setSelectedId={setSelectedId} />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default ServiceItem;
