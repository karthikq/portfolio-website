/** @format */

import React, { useEffect } from "react";

const Navbarli = ({ pathname }) => {
  useEffect(() => {}, []);
  return (
    <a href={"#" + pathname.toLowerCase() + "?path=" + pathname.toLowerCase()}>
      <li>{pathname}</li>
    </a>
  );
};

export default Navbarli;
