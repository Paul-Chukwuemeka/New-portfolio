import { useContext } from "react";
import ViewBtn from "@/components/ui/viewBtn";
import { SiTypescript, SiRedux, SiMongodb } from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaCss3,
  FaPython,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { AppContext } from "@/contexts/app-contexts";



const Main = () => {
  const { darkMode } = useContext(AppContext);
  const tools = [
    {
      language: "Typescript",
      icon: <SiTypescript />,
    },
    {
      language: "Redux",
      icon: <SiRedux />,
    },
    {
      language: "MongoDb",
      icon: <SiMongodb />,
    },
    {
      language: "Git",
      icon: <FaGitAlt />,
    },
    {
      language: "Html",
      icon: <FaHtml5 />,
    },
    {
      language: "Javascript",
      icon: <FaJs />,
    },
    {
      language: "Css",
      icon: <FaCss3 />,
    },
    {
      language: "Python",
      icon: <FaPython />,
    },
    {
      language: "Node Js",
      icon: <FaNode />,
    },
    {
      language: "NextJs",
      icon: <RiNextjsLine />,
    },
    {
      language: "TailWind",
      icon: <RiTailwindCssFill />,
    },
    {
      language: "React",
      icon: <FaReact />,
    },
    {
      language: "Postgres",
      icon: <BiLogoPostgresql />,
    },
  ];
  return (
    <main className="flex-1 p-10 flex items-center justify-center">
      <div className=" w-full max-w-5xl flex max-xl:flex-col gap-8 items-center justify-center">
        <div
          className={`flex flex-col gap-6 items-center max-w-4xl max-xl:text-center w-full xl:items-start ${
            darkMode ? "text-[#999999]" : "text-[#585757]"
          } `}
        >
          <h1
            className="text-5xl max-md:text-3xl max-lg:leading-11 leading-14 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center"
          >
            My Skills & Tools
          </h1>
          <p className="text-xl leading-8 max-lg:text-lg">
            While I focus on{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              frontend
            </span>
            , I also work with{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              backend tools
            </span>
            . Over time,{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              problem-solving
            </span>{" "}
            and{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              teamwork
            </span>{" "}
            have shaped how I approach building
            <span
              className={`font-semibold ${
                darkMode ? "text-dark" : "text-primary"
              }`}
            >
              {" "}
              projects
            </span>
            .
          </p>
          <ViewBtn message="View Resumé" link="" />
        </div>
        <div className="text-center">
          <h1
            className={`text-2xl ${
              darkMode ? "text-dark" : "text-primary"
            }    max-lg:leading-10 leading-12 font-semibold`}
          >
            My Familar Tools Include:
          </h1>
          <div className=" my-2  flex gap-[15px_25px] items-center justify-center p-1 flex-wrap w-lg">
            {tools.map((tool, i) => {
              return (
                <div className={`p-4 w-50 cursor-pointer h-16 hover:scale-95  flex items-center justify-center gap-2 ${darkMode ?"bg-dark shadow-[0px_0px_5px_#2f2f2f]" : "bg-primary shadow-[0px_0px_20px_#dadada]"}`} key={i}>
                  <span className="text-2xl">{tool.icon}</span>
                  <h2 className="text-lg font-bold">{tool.language}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
