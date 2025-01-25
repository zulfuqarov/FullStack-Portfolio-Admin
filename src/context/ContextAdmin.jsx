import React, { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

const ContextAdmin = ({ children }) => {
  const [showBars, setshowBars] = useState(false);
  const toogleBars = () => {
    setshowBars(!showBars);
  };

  return (
    <AdminContext.Provider
      value={{
        toogleBars,
        showBars,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default ContextAdmin;
