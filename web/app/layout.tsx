import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker, Anton } from "next/font/google"; // Added Anton
import Navbar from "./components/layout/Navbar";
import SmoothScroll from "./components/ui/SmoothScroll";
import GlobalProgressBar from "./components/ui/GlobalProgressBar";
import ContactModal from "./components/ui/ContactModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gautham Ganesh Portfolio",
  description: "A pixel-perfect recreation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${anton.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <GlobalProgressBar />
          <ContactModal />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
