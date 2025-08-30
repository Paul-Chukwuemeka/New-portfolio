import React from "react";
import Link from "next/link";
import { AppContext } from "@/contexts/app-contexts";
import { useContext } from "react";
type viewBtnProp = {
  message: string;
  link: string;
};

const ViewBtn = ({ message, link }: viewBtnProp) => {
  const { darkMode } = useContext(AppContext);
  return (
    <Link
      href={link}
      className="relative  w-40 h-12  hover:*:top-0 hover:*:left-0 "
    >
      <button
        className={`${
          !darkMode ? "bg-dark  text-dark" : "bg-primary text-primary"
        } relative cursor-pointer w-full h-full z-50 border`}
      >
        <p className="capitalize text-lg font-semibold">{message}</p>
      </button>
      <div className="border-2 w-full h-full z-0 absolute left-2 delay-300 top-2 duration-300 "></div>
    </Link>
  );
};

export default ViewBtn;
