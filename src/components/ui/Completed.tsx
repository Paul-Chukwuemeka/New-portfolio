import Lottie from "lottie-react";
import successAnim from "@/assets/success.json";
import React from "react";

const Completed = ({
  setCompleted,
}: {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed inset-0 backdrop-blur-[1px] flex items-center justify-center z-50"
      onClick={() => setCompleted(false)}
    >
      <div
        className=" bg-primary p-4 w-full max-lg:w-90  h-85 max-w-2xl rounded-lg dark:bg-dark flex-col gap-4 shadow-[0px_0px_10px] text-center duration-500 shadow-gray-400 dark:shadow-gray-600 dark:text-dark text-primary fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl max-lg:text-lg font-semibold">
          Mail has been sent successfully
        </h1>
        <p className="text-md max-lg:text-sm font-medium">
          I will get back to you soon!!
        </p>
        <Lottie
          animationData={successAnim}
          loop={false}
          autoplay={true}
          className="w-50 max-lg:w-40 h-50 max-lg:h-40"
        />
      </div>
    </div>
  );
};

export default Completed;
