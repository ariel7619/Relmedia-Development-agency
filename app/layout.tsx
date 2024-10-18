import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relmedia | Design & Development agency",
  description: "Grow your business with RelMedia, a design & development agency.",
  openGraph: {
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'RelMedia Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
