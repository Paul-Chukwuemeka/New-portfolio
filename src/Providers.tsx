import { ReactNode } from "react";
import AppContextProvider from "./contexts/AppContexts";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
