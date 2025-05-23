

import type { Metadata } from "next";
import { Outfit, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


// Configure Outfit font with all weights (100-900)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: "variable", // This enables all weights (100-900)
  display: "swap",
});

// Configure Prata font (only has regular 400 weight)
const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "House Of Fashion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${prata.variable}`}>
      <body className="font-sans">
       
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}