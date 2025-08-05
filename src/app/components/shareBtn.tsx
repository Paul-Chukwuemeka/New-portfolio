"use client";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const ShareBtn = () => {
  const [isSocials, setIsSocials] = useState(false);
  return (
    <div className="absolute z-50 flex flex-col items-center justify-center  bottom-10 right-10 "
    onBlur={()=>{
        setIsSocials(false)
    }}
    >
      <div className={`flex flex-col  gap-2 items-center`}>
        <div
          className={` ${isSocials ? "flex" : "hidden"} w-fit *:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] h-38  *:cursor-pointer flex-col justify-around *:rounded-full *:bg-white *:flex *:items-center *:justify-center *:w-10 *:h-10`}
        >
          <button>
            <FaXTwitter />
          </button>
          <button>
            <FaGithub />
          </button>
          <button>
            <FaLinkedin />
          </button>
        </div>
        <button className="h-10 w-10 flex items-center justify-center text-xl cursor-pointer bg-white  rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]"
        onClick={()=>{
            setIsSocials(!isSocials)
        }}
        >
          <FiShare2 />
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
