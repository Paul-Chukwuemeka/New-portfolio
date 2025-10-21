"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../../contexts/AppContexts";
import { useContext } from "react";
import Link from "next/link";
import ThemeBtn from "../ui/ThemeBtn";
import { navLinks } from "@/Constant";

const SideBar = () => {
  const { setSideBar, sideBar } = useContext(AppContext);

  return (
    <div
      className={`${
        sideBar ? "w-screen" : "w-0"
      } h-full fixed left-0 top-0 z-100 `}
      onClick={() => setSideBar(false)}
    >
      <aside
        className={` lg:hidden bg-primary text-primary dark:bg-dark dark:text-dark  flex flex-col items-center justify-center h-full min-w-60 w-1/3 shadow-xl z-20 fixed top-0  duration-500 ${
          sideBar ? "right-0" : "right-[-100%]"
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-2xl absolute top-5 left-5   active:scale-90 transition-transform duration-500"
          type="button"
          aria-label="close sidebar"
          onClick={() => {
            setSideBar(false);
          }}
        >
          <FaTimes />
        </button>
        <ul className="list-none p-8 h-5/6 *:text-xl *:  font-medium flex flex-col gap-10 items-center">
          {navLinks.map((link, i) => {
            return (
              <Link href={link.url} key={i}>
                {link.title}
              </Link>
            );
          })}
        </ul>
        <ThemeBtn />
      </aside>
    </div>
  );
};

export default SideBar;
