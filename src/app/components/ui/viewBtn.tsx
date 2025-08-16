import React from "react";
import Link from "next/link";
import { AppContext } from "@/app/contexts/app-contexts";
import { useContext } from "react";
type viewBtnProp = {
  message: string;
  link: string;
};

const ViewBtn = ({ message, link }: viewBtnProp) => {
  const { darkMode } = useContext(AppContext);
  return (
    <Link href={link} className="relative w-40 h-15 hover:*:top-0 hover:*:left-0 ">
      <button
        className={`${
          !darkMode ? "bg-dark text-dark" : "bg-primary text-primary"
        } relative cursor-pointer z-50 w-45  h-13 border`}
      >
        <p className="capitalize text-lg">{message}</p>
      </button>
      <div className="w-45 h-13 border-2 z-0 absolute left-2 delay-300 top-2 duration-300 "></div>
    </Link>
  );
};

export default ViewBtn;
