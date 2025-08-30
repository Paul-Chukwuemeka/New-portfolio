import React from "react";
import { AppContext } from "@/contexts/app-contexts";
import { useContext } from "react";

const Main = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <main className="flex-1 p-10 flex items-center justify-center">
      <div className="w-full max-lg:max-w-xl max-w-5xl flex max-xl:flex-col gap-8 items-center justify-center">
        <div
          className={`flex flex-col max-w-xl gap-4 max-lg:text-center  ${
            darkMode ? "text-[#999999]" : "text-[#585757]"
          } `}
        >
          <h2 className="text-5xl max-md:text-3xl max-lg:leading-11 leading-15 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center">
            Want to work with me?
          </h2>
          <h2
            className={`text-5xl ${
              darkMode ? "text-white" : "text-gray-800"
            }  max-md:text-3xl max-lg:leading-11 leading-15 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center`}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-xl max-lg:text-lg max-lg:max-w-2xl max-lg:text-center">
            I am open to remote and onsite full-time, part-time, and contract
            fullstack web development jobs.
          </p>
        </div>
        <form className=" gap-4 p-4 max-w-xl flex flex-col w-full">
          <input
            type="text"
            className="border-2 h-16 p-4"
            placeholder="Enter your name"
            title="name input"
          />
          <input
            type="text"
            className="border-2 h-16 p-4"
            placeholder="Enter your email address"
            title="email input"
          />
          <textarea
            name="message"
            placeholder="Write your Message"
            aria-label="message"
            className="border-2 h-30 overflow-auto p-4"
          ></textarea>
          <div className="relative  w-full h-16  hover:*:top-0 hover:*:left-0 ">
            <button
              className={`${
                !darkMode ? "bg-dark  text-dark" : "bg-primary text-primary"
              } relative cursor-pointer w-full h-full z-50 border`}
            >
              <p className="capitalize font-semibold text-lg">Connect</p>
            </button>
            <div className="border-2 w-full h-full z-0 absolute left-2 delay-300 top-2 duration-300 "></div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Main;
