import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newake = localFont({
  src: "../public/fonts/Newake-Font-Demo.otf",
  variable: "--font-newake",
});

export const metadata: Metadata = {
  title: "Mohanad Hani",
  description: "Mohanad Hani's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newake.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
