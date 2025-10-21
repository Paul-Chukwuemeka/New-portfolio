import ViewBtn from "@/components/ui/ViewBtn";
import { tools } from "@/Constant";

const Skills = () => {
  return (
    <main className="flex-1 p-10 flex items-center justify-center">
      <div className=" w-full max-w-5xl flex max-xl:flex-col gap-8 items-center justify-center">
        <div
          className={`flex flex-col gap-6 items-center max-w-4xl max-xl:text-center w-full xl:items-start  `}
        >
          <h1 className="text-5xl max-md:text-3xl max-lg:leading-11 leading-14 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center">
            My Skills & Tools
          </h1>
          <p className="text-xl leading-8 max-lg:text-lg">
            While I focus on <span className={`font-semibold `}>frontend</span>,
            I also work with{" "}
            <span className={`font-semibold `}>backend tools</span>. Over time,{" "}
            <span className={`font-semibold `}>problem-solving</span> and{" "}
            <span className={`font-semibold `}>teamwork</span> have shaped how I
            approach building
            <span className={`font-semibold `}> projects</span>.
          </p>
          <ViewBtn />
        </div>
        <div className="text-center">
          <h1
            className={`text-2xl    max-lg:leading-10 leading-12 font-semibold`}
          >
            My Familar Tools Include:
          </h1>
          <div className=" my-2  flex gap-[15px_25px] items-center justify-center p-1 flex-wrap w-lg">
            {tools.map(({ language, icon: Icon }) => {
              return (
                <span
                  className={`p-4 w-50 border-2   h-16 hover:scale-95  flex items-center justify-center gap-2 transition-transform duration-500`}
                  key={language}
                >
                  <span className="text-2xl">
                    <Icon />
                  </span>
                  <h2 className="text-lg font-bold">{language}</h2>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
