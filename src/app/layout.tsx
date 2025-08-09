import type { Metadata } from "next";
import "./globals.css";
import AppContextProvider from "./contexts/app-contexts";

export const metadata: Metadata = {
  title: "MaskedDev",
  description: "Paul Chukwuemeka's portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-Inter`}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
