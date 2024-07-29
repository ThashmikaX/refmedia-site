import type { Metadata } from "next";
import localFont from "next/font/local";

import { Outfit } from "next/font/google";
import "./globals.css";

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
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
