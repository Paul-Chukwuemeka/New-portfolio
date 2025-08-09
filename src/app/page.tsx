"use client";
import NavBar from "./components/layout/NavBar";
import ShareBtn from "./components/ui/shareBtn";
import SideBar from "./components/layout/sideBar";
import ThemeButton from "./components/ui/themeBtn";
import { AppContext } from "./contexts/app-contexts";
import { useContext } from "react";
import Hero from "./components/layout/hero";

export default function Home() {
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`flex max-lg:flex-col h-fit min-h-screen font-sans  ${
        darkMode
          ? "bg-dark *:bg-dark text-dark"
          : "bg-primary *:bg-primary text-primary"
      }`}
    >
      <div className="absolute top-10 right-10 max-lg:hidden">
        <ThemeButton />
      </div>
      <NavBar />
      <SideBar />
      <Hero/>
      <ShareBtn />
    </div>
  );
}
