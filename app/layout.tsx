import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chavi Weisman | Front-End Developer Portfolio",
  description:
    "Portfolio of Chavi Weisman-Miller, a front-end developer specializing in React, TypeScript, and modern web design. Explore featured projects built with JavaScript, React, Next.js, and responsive UI techniques.",
  keywords: [
    "Chavi Weisman",
    "Chavi Weisman-Miller",
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Jerusalem Developer",
    "Israel Developer",
    "Web Development Portfolio",
  ],
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
