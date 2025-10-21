import { useEffect, useState } from "react";
import { texts } from "@/Constant";

const HeroSide = () => {
  const [current, setCurrent] = useState(0);
  const rotationInterval = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentText = texts[current];
  const subtexts = currentText.subtext.split(" ");

  return (
    <div
      className={`flex flex-col  justify-center items-center h-fit w-1/2 max-w-lg p-4 max-xl:hidden duration-500 gap-14 }`}
    >
      <div
        className={`h-70 w-70 bg-dark dark:bg-primary text-dark dark:text-primary relative after:absolute after:h-70 after:w-70 duration-500 after:duration-500 hover:after:top-0 hover:after:right-0 after:border-4  after:top-3.5  after:right-3.5 after:z-0 after:border-primary  dark:after:border-dark  flex items-center justify-center text-9xl font-bold `}
      >
        <span>{currentText.header}</span>
      </div>
      <div className="flex *:duration-500 flex-col items-center gap-4">
        <div className=" flex flex-col gap-4 ">
          <div className="flex gap-4">
            {subtexts[0] &&
              subtexts[0].split("").map((l, i) => (
                <div
                  key={i}
                  className={` w-16 h-16 border flex items-center justify-center`}
                >
                  <h2 className="text-xl font-bold uppercase">{l}</h2>
                </div>
              ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex gap-4">
            {subtexts[1] &&
              subtexts[1].split("").map((l, i) => (
                <div
                  key={i}
                  className={` w-15 h-15 border flex items-center justify-center`}
                >
                  <h2 className="text-xl uppercase font-bold">{l}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSide;
