import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MathsWithSD — AI-Powered Math Learning & Examination Suite",
  description: "Discover MathsWithSD, the premier dual-application ecosystem featuring real-time formula rendering, dynamic assessments, live leaderboards, and proctoring.",
  keywords: ["MathsWithSD", "math assessment", "math quiz", "math solver", "proctored exam", "student math", "LaTeX solver"],
  authors: [{ name: "Kalpajit Bepary" }],
  robots: "index, follow",
  openGraph: {
    title: "MathsWithSD — AI-Powered Math Learning & Examination Suite",
    description: "Discover MathsWithSD, the premier dual-application ecosystem featuring real-time formula rendering, dynamic assessments, and proctoring.",
    url: "https://mathswithsd.in",
    siteName: "MathsWithSD",
    images: [
      {
        url: "/hero_showcase.jpg",
        width: 1200,
        height: 630,
        alt: "MathsWithSD Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MathsWithSD — AI-Powered Math Learning & Examination Suite",
    description: "Discover MathsWithSD, the premier dual-application ecosystem featuring real-time formula rendering, dynamic assessments, and proctoring.",
    images: ["/hero_showcase.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
