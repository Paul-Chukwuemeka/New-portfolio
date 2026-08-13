import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contacts = [
  {
    label: "Email",
    value: "paulchukwuemeka22@gmail.com",
    href: "mailto:paulchukwuemeka22@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+234 704 327 5525",
    href: "tel:+2347043275525",
    icon: FaPhone,
  },
  {
    label: "GitHub",
    value: "github.com/Paul-Chukwuemeka",
    href: "https://github.com/Paul-Chukwuemeka",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/paulchukwuemeka",
    href: "https://www.linkedin.com/in/paulchukwuemeka/",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <main className="flex-1 p-10 flex items-center justify-center">
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
        <div className="w-full max-w-xl flex flex-col gap-4 p-4">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="border-2 h-16 p-4 flex items-center gap-4 hover:border-4 hover:scale-95 transition-all duration-500"
            >
              <span className="text-2xl">
                <Icon />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold">{label}</span>
                <span className="text-sm">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;