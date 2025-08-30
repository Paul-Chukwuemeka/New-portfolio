import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useContext } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { AppContext } from "../../contexts/app-contexts";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { setSideBar, darkMode } = useContext(AppContext);
  const pathName = usePathname();
  const router = useTransitionRouter();

  const navLinks = [
    {
      url: "/",
      title: "About",
    },
    {
      url: "/skills",
      title: "Skills",
    },
    {
      url: "/resume",
      title: "Resume",
    },
    {
      url: "/projects",
      title: "Projects",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  return (
    <header className="border-r-[2px] sticky top-0 left-0 max-lg:border-none  max-lg:justify-between flex items-center justify-end max-lg:h-fit h-screen w-14 max-lg:w-full max-lg:p-5 max-lg:px-6">
      <h1 className="text-2xl lg:hidden font-bold ">MaskedDev</h1>
      <ul
        className={`list-none  *:font-semibold *:cursor-pointer   *:after:block *:after:content-[''] *:relative *:after:absolute *:after:left-0 *:after:bottom-0 *:after:  -450 *:hover:after:w-full  *:after:w-0 *:after:h-0.5  *:after:duration-300 max-lg:hidden h-4/5 min-h-160 ${
          darkMode ? "bg-dark *:after:bg-primary" : "bg-primary *:after:bg-dark"
        } max-h-200 flex flex-col  justify-center gap-20 items-center  translate-x-1/2 text-[15px]   *:rotate-270 `}
      >
        {navLinks.map((link, i) => {
          return (
            <a
              key={i}
              href={link.url}
              className={`${
                pathName == link.url &&
                `${
                  darkMode
                    ? "text-shadow-[0px_0px_10px] text-shadow-white"
                    : "line-through"
                }`
              }`}
              onClick={(e) => {
                e.preventDefault();
                router.push(link.url);
              }}
            >
              {link.title}
            </a>
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
