"use client";

import React, { useState } from "react";
import { createContext } from "react";

type AppContextType  = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  darkMode: true,
  setDarkMode: () => {},
  sideBar :false,
  setSideBar: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode,sideBar,setSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
