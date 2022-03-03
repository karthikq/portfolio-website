/** @format */

import React, { useEffect, useRef, useState } from "react";

const Navbarli = ({ pathname, location }) => {
  const [pathValue, setPathValue] = useState("");
  const ref = useRef();

  const handlePath = () => {
    window.history.pushState("s", "", "?path=" + pathname.toLowerCase());
    const { path } = window.Qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    // setPathValue(path);
    // window.location = "#" + pathname.toLowerCase();
    // console.log(ref.current);
    // console.log(document.querySelector(".ul-nav  li"));
    setPathValue(path);
  };
  return (
    <a
      href={"#" + pathname.toLowerCase()}
      className={
        pathname.toLowerCase() === pathValue ? "li-navactive  li-nav" : "li-nav"
      }
      onClick={handlePath}>
      <li>{pathname}</li>
    </a>
  );
};

export default Navbarli;
