import React, { useState, useTransition } from "react";
import Completed from "@/components/ui/Completed";
import ErrorComponent from "@/components/ui/Error";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  async function handleSendMail() {
    setError(false);
    setCompleted(false);

    startTransition(async () => {
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to send message");
        }

        const data = await res.json();
        console.log(data);
        setCompleted(true);
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        setError(true);
        console.error(error);
      }
    });
  }

  return (
    <main className="flex-1 p-10 flex items-center justify-center">
      {completed && <Completed  setCompleted={setCompleted} />}
      <div className="w-full max-lg:max-w-xl max-w-5xl flex max-xl:flex-col gap-8 items-center justify-center">
        <div className={`flex flex-col max-w-xl gap-4 max-lg:text-center   `}>
          <h2 className="text-5xl max-md:text-3xl max-lg:leading-11 leading-15 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center">
            Want to work with me?
          </h2>
          <h2
            className={`text-5xl   max-md:text-3xl max-lg:leading-11 leading-15 font-semibold max-lg:flex max-lg:flex-col max-lg:items-center`}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-xl max-lg:text-lg max-lg:max-w-2xl max-lg:text-center">
            I am open to remote and onsite full-time, part-time, and contract
            fullstack web development jobs.
          </p>
        </div>
        <form
          className=" gap-4 p-4 max-w-xl flex flex-col w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMail();
          }}
        >
          <input
            type="text"
            className="border-2 h-16 p-4"
            placeholder="Enter your name"
            aria-label="name input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="border-2 h-16 p-4"
            placeholder="Enter your email address"
            aria-label="email input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Write your Message"
            aria-label="message"
            className="border-2 h-30 overflow-auto p-4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="relative  w-full h-16  hover:*:top-0 hover:*:right-0 hover:border-4 duration-500 ">
            <button
              className={` relative dark:bg-primary bg-dark dark:text-primary text-dark  w-full h-full z-10 border transition-all duration-500`}
            >
              <p className="capitalize font-semibold text-lg">
                {isPending ? "Sending..." : "Connect"}
              </p>
            </button>
            <div className="border-2 w-full h-full -z-0 absolute right-1.5 top-1.5 transition-all duration-500"></div>
          </div>
        </form>
      </div>
      {error && <ErrorComponent setError={setError} />}
    </main>
  );
};

export default Contact;
