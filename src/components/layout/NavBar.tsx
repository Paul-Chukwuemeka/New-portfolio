"use client";
import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContexts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/Constant";

const NavBar = () => {
  const { setSideBar } = useContext(AppContext);
  const pathName = usePathname();

  return (
    <header className="border-r-[2px] sticky top-0 left-0 max-lg:border-none max-lg:justify-between flex items-center justify-end max-lg:h-fit h-screen w-14 max-lg:w-full max-lg:p-5 max-lg:px-6">
      <h1 className="text-2xl lg:hidden font-bold ">MaskedDev</h1>
      <ul
        className="list-none
        font-semibold max-lg:hidden h-4/5 min-h-160
        max-h-200 flex flex-col
        justify-center gap-20 items-center
        translate-x-1/2 text-[15px]
        dark:bg-dark bg-primary
        duration-500 
        "
      >
        {navLinks.map((link, i) => {
          const isActive = pathName === link.url;
          return (
            <Link
              key={i}
              href={link.url}
              className={`${
                isActive && "line-through decoration-2"
              } after:block after:content-[''] relative cursor-pointer
                after:absolute after:left-0 after:bottom-0 hover:after:w-full 
               after:w-0 after:h-0.5 after:duration-300 rotate-270
              `}
            >
              {link.title}
            </Link>
          );
        })}
      </ul>
      <button
        className="text-3xl lg:hidden *:cursor-pointer"
        onClick={() => {
          setSideBar(true);
        }}
        aria-label="sidebar button"
        type="button"
      >
        <HiMiniBars3BottomRight />
      </button>
    </header>
  );
};

export default NavBar;
