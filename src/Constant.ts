import { ComponentType } from "react";
import { SiTypescript, SiRedux, SiMongodb } from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaCss3,
  FaPython,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import kanbanLight from "../public/kanban-light.png"
import kanbanDark from "../public/kanban-dark.png"
import { StaticImageData } from "next/image";

export const navLinks = [
  {
    url: "/",
    title: "About",
  },
  {
    url: "/skills",
    title: "Skills",
  },
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

export const texts = [
  {
    header: "PC",
    subtext: "Masked Dev",
  },
  {
    header: "FS",
    subtext: "Full Stack",
  },
];

export type Tool = {
  language: string;
  icon: ComponentType;
};

export const tools: Tool[] = [
  {
    language: "Typescript",
    icon: SiTypescript,
  },
  {
    language: "Redux",
    icon: SiRedux,
  },
  {
    language: "MongoDb",
    icon: SiMongodb,
  },
  {
    language: "Git",
    icon: FaGitAlt,
  },
  {
    language: "Html",
    icon: FaHtml5,
  },
  {
    language: "Javascript",
    icon: FaJs,
  },
  {
    language: "Css",
    icon: FaCss3,
  },
  {
    language: "Python",
    icon: FaPython,
  },
  {
    language: "Node Js",
    icon: FaNode,
  },
  {
    language: "NextJs",
    icon: RiNextjsLine,
  },
  {
    language: "TailWind",
    icon: RiTailwindCssFill,
  },
  {
    language: "React",
    icon: FaReact,
  },
  {
    language: "Postgres",
    icon: BiLogoPostgresql,
  },
];

type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  imageDark: StaticImageData;
  git: string;
  live: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    name: "Kanban app",
    description: "A kanban app with drag and drop functionality",
    image: kanbanDark,
    imageDark: kanbanLight,
    git: "https://github.com/Paul-Chukwuemeka/kanban",
    live: "https://kanban-dbs5jyn8d-paul-chukwuemekas-projects.vercel.app/",
    tools: ["Tailwind", "NextJs", "TypeScript"],
  },
];
