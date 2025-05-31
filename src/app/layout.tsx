import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Roboto_Mono } from 'next/font/google'
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto_mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "The (JDM) Import Wiki",
  description: "Fuck the gatekeepers",
};

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin']
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
})

