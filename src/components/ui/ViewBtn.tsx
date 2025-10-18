import React from "react";
import Link from "next/link";

const ViewBtn = () => {
  return (
    <Link
      href={
        "https://docs.google.com/document/d/12PkW0gzVAQnKry4aw65zL8x-iwpT1Kd4FcWwMJXgpe0/edit?usp=sharing"
      }
      className="relative  w-40 h-12 hover:*:top-0 hover:*:left-0 view-btn  cursor-pointer duration-500  bg-dark text-dark dark:bg-primary dark:text-primary capitalize text-lg flex items-center justify-center font-semibold"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resumé
      <div className="border-2 w-full h-full dark:text-dark text-primary  z-0 absolute left-2 top-2 duration-500 "></div>
    </Link>
  );
};

export default ViewBtn;
