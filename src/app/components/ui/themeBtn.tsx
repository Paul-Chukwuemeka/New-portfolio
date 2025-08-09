import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../contexts/app-contexts";

export default function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <button
      className=" right-10 w-10 active:scale-90 h-10 cursor-pointer shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
