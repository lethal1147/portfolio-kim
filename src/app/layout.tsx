import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./glitchText.css";
import NavBar from "@/components/common/navBar";

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
  title: "Portfolio - Kim",
  description: "Kim's Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased base-background-color max-w-screen text-gray-300 snap-y`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
