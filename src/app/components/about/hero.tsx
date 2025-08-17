import React, { useEffect } from "react";
import { AppContext } from "@/app/contexts/app-contexts";
import { useContext,useRef } from "react";
import ViewBtn from "../ui/viewBtn";
import InitialDiv from "../about/Side";

const Hero = () => {
  const { darkMode } = useContext(AppContext);
  const text = useRef(null)
  const highlight = darkMode
    ? "text-white font-semibold"
    : "text-primary  font-semibold";

    useEffect(()=>{
      if(text.current){
        console.log(text.current)
      }
    },[])
  return (
    <div className="flex-1 flex items-center justify-center p-10 gap-10">
      <div className="flex flex-col gap-8 max-lg:items-center">
        <div
          className={`flex flex-col gap-6  max-w-xl max-lg:text-center ${
            darkMode ? "text-[#999999]" : "text-[#585757]"
          } `}
        >
          <h1 className="text-4xl max-md:text-3xl  max-lg:leading-11 leading-12 font-semibold">
            Hello, I&apos;m <br />
            <div className={highlight + "text-6xl "}>
              <span ref={text}>P</span>
              <span ref={text}>a</span>
              <span ref={text}>u</span>
              <span ref={text}>l</span> <span ref={text}>C</span>
              <span ref={text}>h</span>
              <span ref={text}>u</span>
              <span ref={text}>k</span>
              <span ref={text}>w</span>
              <span ref={text}>u</span>
              <span ref={text}>e</span>
              <span ref={text}>m</span>
              <span ref={text}>e</span>
              <span ref={text}>k</span>
              <span ref={text}>a</span>
            </div>
          </h1>
          <p className="text-2xl max-lg:text-xl leading-8">
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
