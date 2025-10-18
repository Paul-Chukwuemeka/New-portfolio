import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <button
      onClick={() =>
        setTheme(mounted && resolvedTheme == "dark" ? "light" : "dark")
      }
      className=" outline-none text-2xl cursor-pointer 
      active:scale-90 duration-500 max-md:text-lg w-10 
      flex items-center justify-center h-10 p-2 shadow-[0_0_10px]
    shadow-gray-400 dark:shadow-gray-300/25 rounded-full -rotate-z-15 transition-transform"
    >
      {resolvedTheme == "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeBtn;
