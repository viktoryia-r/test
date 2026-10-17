import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Movo — App design concept",
  description: "App design concept on top of Palianka branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>{children}</body>
    </html>
  );
}
