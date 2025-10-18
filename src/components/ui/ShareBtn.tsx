"use client";
import { FiShare2 } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

const ShareBtn = () => {
  const [isSocials, setIsSocials] = useState(false);
  return (
    <div className="absolute z-10 text-black flex flex-col items-center duration-500 justify-center  bottom-10 right-10 ">
      <div
        className={`flex flex-col bg-transparent  gap-2 items-center text-primary`}
      >
        <div
          className={` ${
            isSocials ? "flex" : "hidden"
          } w-fit *:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] h-24  bg-transparent  flex-col justify-around *:rounded-full *:bg-white *:flex *:items-center *:justify-center *:w-10 *:h-10`}
        >
          <Link
            href={"https://github.com/Paul-Chukwuemeka"}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/paulchukwuemeka/"}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </Link>
        </div>
        <button
          aria-label="share button"
          className="h-10 w-10 flex items-center justify-center text-xl   bg-white  rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]"
          onClick={() => {
            setIsSocials(!isSocials);
          }}
          onMouseOver={() => {}}
        >
          <FiShare2 />
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
