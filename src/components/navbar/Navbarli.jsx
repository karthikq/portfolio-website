/** @format */

import React, { useEffect, useRef, useState } from "react";

const Navbarli = ({ pathname, location }) => {
  const [pathValue, setPathValue] = useState("");
  const ref = useRef();

  //   const handlePath = () => {
  //     window.history.pushState("s", "", "?path=" + pathname.toLowerCase());
  //     const { path } = window.Qs.parse(window.location.search, {
  //       ignoreQueryPrefix: true,
  //     });
  //     setPathValue(path);
  //     window.location = "#" + pathname.toLowerCase();
  //     console.log(ref.current);
  //     console.log(document.querySelector(".ul-nav  li"));
  //   };
  return (
    <span ref={ref} className="li-nav">
      <li>{pathname}</li>
    </span>
  );
};

export default Navbarli;
