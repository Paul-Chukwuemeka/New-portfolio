import "./globals.css";
import Providers from "@/Providers";
import type { Metadata } from "next";

import { Red_Hat_Mono } from "next/font/google";

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat-mono",
});

export const metadata: Metadata = {
  title: "MaskedDev - Web Developer",
  description: "Paul Chukwuemeka's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${redHatMono.variable}`}
    >
      <body className="subpixel-antialiased font-red-hat">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
