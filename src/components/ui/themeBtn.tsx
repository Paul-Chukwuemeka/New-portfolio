import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../contexts/app-contexts";

export default function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <button
    aria-label="theme button"
      className={` right-10 w-10 active:scale-90 h-10 cursor-pointer shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-full flex items-center justify-center text-primary bg-primary `}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
