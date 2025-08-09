import React from "react";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useContext } from "react";
import { AppContext } from "../../contexts/app-contexts";

const NavBar = () => {
  const {setSideBar,darkMode} = useContext(AppContext)
  const childrenStyle = "*:font-semibold *:cursor-pointer *:after:block *:after:content-[''] *:relative *:after:absolute *:after:left-0 *:after:bottom-0 *:after:duration-450 *:hover:after:w-full  *:after:w-0 *:after:h-0.5 *:after:bg-gray-900"
  return (
    <div className=" border-r-[2px] max-lg:border-none  max-lg:justify-between flex items-center justify-end max-lg:h-fit h-screen w-14 max-lg:w-full max-lg:p-5 max-lg:px-6">
      <h1 className="text-2xl lg:hidden font-bold ">MaskedDev</h1>
      <nav className={`list-none  duration-300 ${childrenStyle} max-lg:hidden h-4/5 min-h-160 ${darkMode ? "bg-dark" :"bg-primary"} max-h-200 flex flex-col justify-center gap-20 items-center  translate-x-1/2 text-[15px]   *:rotate-270 `}>
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/resume"}>
          <li>Resume</li>
        </Link>
        <Link href={"/work"}>
          <li>Works</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </nav>
      <button className="text-3xl lg:hidden *:cursor-pointer"
      onClick={()=>{
        setSideBar(true)
      }}
      type="button"
      >
        <HiMiniBars3BottomRight />
      </button>
    </div>
  );
};

export default NavBar;
