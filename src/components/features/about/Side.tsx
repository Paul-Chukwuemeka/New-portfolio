import { useEffect, useState, useContext } from "react";
import { AppContext } from "@/contexts/app-contexts";

type Strings = {
  header?: string;
  subtext?: string;
};

const InitialDiv = () => {
  const [strings, setStrings] = useState<Strings>({});
  const [subtexts, setSubtexts] = useState<string[] | undefined>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const texts = [
      {
        header: "PC",
        subtext: "Masked Dev",
      },
      {
        header: "FS",
        subtext: "Full Stack",
      },
    ];

    setStrings(texts[current]);
  }, [current]);

  useEffect(() => {
    if (strings) setSubtexts(strings.subtext?.split(" "));
  }, [strings]);

  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`flex flex-col justify-center items-center h-fit w-1/2 max-w-lg p-4 max-xl:hidden gap-14 ${
        darkMode ? "" : ""
      }`}
    >
      <div
        className={`h-70 w-70 relative after:absolute after:h-70 after:w-70 after:border-4  after:top-4 after:right-4 after:rounded- flex items-center justify-center text-9xl font-bold ${
          darkMode
            ? "bg-primary text-primary after:border-dark"
            : "bg-dark text-dark after:border-primary"
        }`}
      >
        <span>{strings.header}</span>
      </div>
      <div className="flex *:duration-500 flex-col items-center gap-4">
        <div className=" flex flex-col gap-4 ">
          <div className="flex gap-4">
            {subtexts &&
              subtexts[0] &&
              subtexts[0].split("").map((l, i) => (
                <div
                  key={i}
                  className={`${
                    darkMode ? "bg-primary text-primary" : "bg-dark text-dark"
                  } w-15 h-15 border flex items-center justify-center`}
                >
                  <h2 className="text-xl font-bold uppercase">{l}</h2>
                </div>
              ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex gap-4">
            {subtexts &&
              subtexts[1] &&
              subtexts[1].split("").map((l, i) => (
                <div
                  key={i}
                  className={`${
                    darkMode ? "bg-primary text-primary" : "bg-dark text-dark"
                  } w-15 h-15 border flex items-center justify-center`}
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

export default InitialDiv;
