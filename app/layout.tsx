import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


export const metadata: Metadata = {
  title: "EvenGo",
  description: "Event Management System",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="pt-[65px]"></main>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
