/** @format */

import React, { useState } from "react";

export const navContextobject = React.createContext();

const NavContext = ({ children }) => {
  const [navState, setNavState] = useState(false);

  return (
    <navContextobject.Provider value={{ state: navState, update: setNavState }}>
      {children}
    </navContextobject.Provider>
  );
};

export default NavContext;
