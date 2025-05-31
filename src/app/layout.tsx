import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Roboto_Mono } from 'next/font/google'
import { ReactNode } from "react";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Link from "next/link";
import Navbar from "~/navigation/Navbar";

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${roboto_mono.variable} antialiased`}
            >
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <div>
                        <Navbar />
                        {children}
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: "The Import Wiki",
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

