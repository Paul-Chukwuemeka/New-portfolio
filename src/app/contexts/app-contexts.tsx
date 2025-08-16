"use client";

import React, { useState, createContext, useEffect } from "react";

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0d0d0d'; // Apply dark background
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f2f2f2'; // Apply light background
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode,sideBar,setSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
