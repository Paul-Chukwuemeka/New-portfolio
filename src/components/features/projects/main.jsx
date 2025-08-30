import React from "react";
import { AppContext } from "@/contexts/app-contexts";
import { useContext } from "react";
import ViewBtn from "../../ui/viewBtn";

const Main = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <main className="flex-1 p-10 flex items-center justify-center">
      <div className=" w-full max-w-5xl flex max-xl:flex-col gap-8 items-center justify-center">
        <div
          className={`flex flex-col gap-6 max-xl:text-center items-center max-w-4xl w-full xl:items-start ${
            darkMode ? "text-[#999999]" : "text-[#585757]"
          } `}
        >
          <h1
            className={`text-5xl ${
              darkMode ? "text-dark" : "text-primary"
            }  max-md:text-3xl  max-lg:leading-10 leading-12 font-semibold`}
          >
            Projects
          </h1>
          <p
            className={`text-xl max-sm:text-lg max-w-xl xl:items-start ${
              darkMode ? "text-[#999999]" : "text-[#585757]"
            }`}
          >
            Here’s a look at some{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              projects
            </span>{" "}
            I’ve{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              built
            </span>{" "}
            over the years. They{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              highlight
            </span>{" "}
            my skills in both{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              frontend
            </span>{" "}
            and{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              backend
            </span>{" "}
            development, as well as my ability to{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              learn
            </span>
            ,{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              adapt
            </span>
            , and{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              deliver results
            </span>{" "}
            .
          </p>
          <ViewBtn message="View Github" link="" />
        </div>
        <div className="w-full max-w-lg h-120"></div>
      </div>
    </main>
  );
};

export default Main;
