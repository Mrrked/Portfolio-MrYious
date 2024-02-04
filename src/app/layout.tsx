import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark | Portfolio",
  description: "A personal portfolio website for Mark Edison Rosario, the Developer.",
  keywords: ["Mark Edison Rosario", "Portfolio", "Developer"],
  openGraph: {
    title: 'Mark Rosario | Portfolio',
    description: 'A personal portfolio website for Mark Edison Rosario, the Developer.',
    url: 'https://markrosario.vercel.app/',
    siteName: 'markrosario',
    images: [
      {
        url: 'https://markrosario.vercel.app/_next/static/media/profile.8a944781.jpg', // Must be an absolute URL
        width: 800,
        height: 1300,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
