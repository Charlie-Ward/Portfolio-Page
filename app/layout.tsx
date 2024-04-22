import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Navbar } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charlie Ward",
  description: "Charlie Ward - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <h1 className="text-center font-sans antialiased font-bold text-2xl">Charlie Ward</h1>
          <Navbar />
        </div>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
