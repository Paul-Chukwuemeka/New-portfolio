import React from "react";
import { AppContext } from "@/app/contexts/app-contexts";
import { useContext } from "react";
import ViewBtn from "../ui/viewBtn";
import InitialDiv from "../about/Side";

const Hero = () => {
  const { darkMode } = useContext(AppContext);
  const highlight = darkMode
    ? "text-white font-semibold"
    : "text-primary  font-semibold";
  return (
    <div className="flex-1 flex items-center justify-center p-10 gap-10">
      <div className="flex flex-col gap-8 max-lg:items-center">
        <div
          className={`flex flex-col gap-10  max-w-xl max-lg:text-center ${
            darkMode ? "text-[#999999]" : "text-[#585757]"
          } `}
        >
          <h1 className="text-4xl max-md:text-3xl  max-lg:leading-10 leading-12 font-semibold">
            Hello, I&apos;m <br />
            <span className={highlight + "text-6xl"}>Paul Chukwuemeka</span>
          </h1>
          <p className="text-xl max-lg:text-lg">
            I&apos;m a<span className={highlight}> full-stack developer</span>{" "}
            who builds websites that are
            <span className={highlight}> easy to use</span> and
            <span className={highlight}> pleasant</span> to look at. I focus on
            creating
            <span className={highlight}> experiences</span> that work well for
            everyone, <span className={highlight}> front to back</span>.
            I&apos;m looking for <span className={highlight}> a team</span>{" "}
            where I can
            <span className={highlight}> grow</span>, solve real problems, and
            work with others to make <span className={highlight}> useful</span>{" "}
            products.
          </p>
        </div>
        <ViewBtn message={"View Resume"} link={"/resume"} />
      </div>
      <InitialDiv />
    </div>
  );
};

export default Hero;
