"use client";

import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import AppContextProvider from "./contexts/app-contexts";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>MaskedDev</title>
      </head>
      <body className={`subpixel-antialiased font-Inter`}>
        <AppContextProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </AppContextProvider>
      </body>
    </html>
  );
}
