import React from "react";

import ViewBtn from "../../ui/ViewBtn";
import { projects } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <main className="flex-1 p-10 flex items-center overflow-y-auto justify-center">
      <div className=" w-full max-w-5xl flex max-xl:flex-col lg:gap-20 gap-8 items-center justify-center">
        <div
          className={`flex flex-col gap-6 max-xl:text-center items-center max-w-4xl w-full xl:items-start `}
        >
          <h1
            className={`text-5xl  max-md:text-3xl  max-lg:leading-10 leading-12 font-semibold`}
          >
            Projects
          </h1>
          <p className={`text-xl max-sm:text-lg max-w-xl xl:items-start `}>
            Here’s a look at some{" "}
            <span className={`font-semibold `}>projects</span> I’ve{" "}
            <span className={`font-semibold `}>built</span>. They{" "}
            <span className={`font-semibold `}>highlight</span> my skills in
            both <span className={`font-semibold `}>frontend</span> and{" "}
            <span className={`font-semibold `}>backend</span> development, as
            well as my ability to{" "}
            <span className={`font-semibold `}>learn</span>,{" "}
            <span className={`font-semibold `}>adapt</span>, and{" "}
            <span className={`font-semibold `}>deliver results</span> .
          </p>
          <ViewBtn />
        </div>
        <div className="w-full scroll-smooth xl:overflow-y-auto xl:p-10 h-120 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 xl:w-220 gap-4 ">
          {projects.map((project, i) => {
            return (
              <div
                key={project.name + i}
                className={`shadow-[0px_0px_10px]  dark:shadow-gray-600/80 shadow-gray-400  h-fit flex flex-col gap-1  w-full`}
              >
                <Image
                  src={project.image}
                  width={1400}
                  height={500}
                  alt={project.name}
                  className="w-full rounded-inherit"
                />
                <div className="flex flex-col gap-1 p-3 py-2">
                  <h2 className="font-semibold text-md">{project.name}</h2>
                  <p className="">{project.description}</p>
                  <p className="text">{project.tools.join(" + ")}</p>
                  <div
                    className={` gap-2 flex font-semibold *:flex *:items-center *:gap-1 *:p-1 items-center`}
                  >
                    <Link href={project.git} rel="noopener noreferrer">
                      <FaGithub /> Github
                    </Link>
                    <Link href={project.live} rel="noopener noreferrer">
                      <FaLink />
                      Live
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
