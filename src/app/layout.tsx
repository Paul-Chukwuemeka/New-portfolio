import "./globals.css";
import Providers from "@/Providers";

import { Red_Hat_Mono } from "next/font/google";

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat-mono",
});

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
