import React from "react";
import ThemeButton from "../ui/themeBtn";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../../contexts/app-contexts";
import { useContext } from "react";
import Link from "next/link";

const SideBar = () => {
  const { setSideBar, sideBar } = useContext(AppContext);
  return (
    <div
      className={` lg:hidden flex flex-col items-center justify-center h-screen min-w-60 w-1/3 shadow-xl  fixed top-0 ${
        sideBar ? "right-0" : "right-[-100%]"
      } `}
    >
      <button
        className="text-2xl absolute top-5 left-5 cursor-pointer active:scale-90"
        type="button"
        aria-label="close sidebar"
        onClick={() => {
          setSideBar(false);
        }}
      >
        <FaTimes />
      </button>
      <ul className="list-none p-8 h-5/6 *:text-xl *:cursor-pointer font-medium flex flex-col gap-10 items-center">
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/resume"}>
          <li>Resume</li>
        </Link>
        <Link href={"/projects"}>
          <li>Projects</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <ThemeButton />
      </ul>
    </div>
  );
};

export default SideBar;
