import type { Metadata } from "next";
import { Lato, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: "400"
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates",
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(lato.variable, montserratAlternates.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
