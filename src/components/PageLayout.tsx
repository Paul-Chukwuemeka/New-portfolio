import React from "react";
import { ReactNode } from "react";
import SideBar from "@/components/layout/SideBar";
import ShareBtn from "@/components/ui/ShareBtn";
import NavBar from "@/components/layout/NavBar";
import ThemeBtn from "@/components/ui/ThemeBtn";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppContexts";
import { useEffect } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const { setSideBar } = useContext(AppContext);

  useEffect(() => {
    setSideBar(false);
  }, [setSideBar]);
  return (
    <div className="flex max-lg:flex-col duration-500 w-full h-fit min-h-screen dark:bg-dark bg-primary ">
      <SideBar />
      <NavBar />
      <div className="absolute top-10 right-10 max-lg:hidden">
        <ThemeBtn />
      </div>
      {children}
      <ShareBtn />
    </div>
  );
};

export default PageWrapper;
