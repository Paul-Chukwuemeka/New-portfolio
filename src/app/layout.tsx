import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import AppContextProvider from "./contexts/app-contexts";

export const metadata: Metadata = {
  title: "MaskedDev",
  description: "Paul Chukwuemeka's portfolio",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight:["300","400","500","600","700","800","900"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.className}}`}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
