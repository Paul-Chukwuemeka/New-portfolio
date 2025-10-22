import Lottie from "lottie-react";
import errorAnim from "@/assets/Error.json";

const Error = ({
  setError,
}: {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="bg-white dark:bg-dark fixed bottom-5 justify-start right-5 w-100 left-5 rounded-lg shadow-lg max-lg:w-85  h-20 flex items-center"
      onClick={() => setError(false)}
    >
      <Lottie
        animationData={errorAnim}
        loop={false}
        autoPlay={true}
        className="w-30 max-lg:w-25 h-25"
      />
      <div className="flex flex-col ml-4 max-lg:ml-2 text-center">
        <p className="text-lg max-lg:text-md font-semibold">
          Something went wrong!
        </p>
        <p className="text-md max-lg:text-sm font-medium ">Please try again.</p>
      </div>
    </div>
  );
};

export default Error;
