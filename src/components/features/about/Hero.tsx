import React from "react";
import ViewBtn from "@/components/ui/ViewBtn";
import HeroSide from "./HeroSide";

const Hero = () => {
  const highlight = "dark:text-white text-black   font-semibold";

  return (
    <main className="flex-1 flex items-center text-black/600 dark:text-white/80 justify-center p-20 max-md:p-10 gap-10">
      <div className="flex flex-col gap-8  max-lg:items-center">
        <div className={`flex flex-col gap-10 max-md:gap-4  max-w-xl max-lg:text-center `}>
          <h1 className="text-5xl  max-md:text-5xl max-sm:text-4xl max-lg:leading-11 leading-16 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center">
            Hello, I&apos;m <br />
            <span
              className={
                highlight +
                "flex gap-3 leading-15 justify-center items-center w-fit"
              }
            >
              Paul Chukwuemeka
            </span>
          </h1>
          <p className="text-xl leading-8 max-lg:text-[16px]">
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
        <ViewBtn />
      </div>
      <HeroSide />
    </main>
  );
};

export default Hero;
