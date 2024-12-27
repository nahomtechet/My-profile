import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
title: "My Portfolio - Behailu Bekele",
description: "Welcome to my personal portfolio showcasing my web development skills and projects.",
keywords: "web development, portfolio, Next.js, React, Tailwind CSS, JavaScript, Frontend Developer",

openGraph: {
  title: "My Portfolio - Behailu Bekele",
  description: "Explore my web development projects and skills. Get in touch for collaborations or job opportunities.",
  url: "https://behailu.netlify.app",
  siteName: "My Portfolio",
  images: [
    {
      url: "https://behailu.netlify.app/images/screenshot1.png", 
      width: 1200,
      height: 630,
      alt: "Portfolio image"
    }
  ],
  type: "website",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
