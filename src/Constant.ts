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

type Project = {
  name: string;
  description: string;
  image: string;
  git: string;
  live: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    name: "Kanban app",
    description: "A kanban app with drag and drop functionality",
    image: "/kanban.png",
    git: "https://github.com/Paul-Chukwuemeka/kanban",
    live: "https://kanban-dbs5jyn8d-paul-chukwuemekas-projects.vercel.app/",
    tools: ["Tailwind", "NextJs", "TypeScript"],
  },
];
