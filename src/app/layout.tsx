import type { Metadata } from "next";
import localFont from "next/font/local";

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REF Media",
  description:
    "Welcome to the media unit of the Faculty of Engineering, University of Ruhuna.",
  icons: {
    icon: ["/assets/logo.ico"],
  },
};

const clash = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-clash",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={outfit.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
