"use client";
import "./globals.css";
import { spaceGrotesk } from "@/fonts";
import { ViewTransitions } from "next-view-transitions";
import AppContextProvider from "../contexts/app-contexts";
import SideBar from "@/components/layout/sideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>MaskedDev</title>
        </head>
        <body className={`subpixel-antialiased ${spaceGrotesk.className}`}>
          <AppContextProvider>
            <SideBar />
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
