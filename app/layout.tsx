import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
      </body>
    </html>
  );
}
