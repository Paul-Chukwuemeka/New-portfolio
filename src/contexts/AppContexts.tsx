"use client";

import React, { useState, createContext } from "react";

type AppContextType = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  sideBar: false,
  setSideBar: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <AppContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
