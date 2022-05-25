/** @format */

import React, { useEffect, useState } from "react";
import "./services.styles.scss";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { services } from "./data";
export const SelService = ({ setSelectedId, selectedId }) => {
  const [serviceItems, setServiceItems] = useState([]);
  useEffect(() => {
    const data = services.find((item) => {
      return item.id === selectedId;
    });
    setServiceItems(data.items);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="selservice-container">
      <motion.div className="selservice-contents">
        <button className="close_btn" onClick={() => setSelectedId(null)}>
          <AiOutlineCloseCircle className="close_btn-active" />
        </button>
        <ul>
          {serviceItems?.map((list, index) => (
            <li key={index}>{list.text}</li>
          ))}
        </ul>
      </motion.div>{" "}
    </motion.div>
  );
};
