import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "./components/ui/SmoothScrolling";
import "./globals.css";

const aeonikRegular = localFont({
  src: "./fonts/Aeonik-Regular.ttf",
  variable: "--font-aeonik-sans",
  weight: "100, 700",
  display: "swap",
});

const sofiaProRegular = localFont({
  src: "./fonts/Sofia-Pro-Regular.otf",
  variable: "--font-sofiaPro-sans",
  weight: "200, 600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numan Javed | Full Stack Developer Portfolio",
  description:
    "Explore Numan Javed's portfolio showcasing expertise in full-stack development, innovative projects, and professional achievements in web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonikRegular.variable} ${sofiaProRegular.variable}  antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
