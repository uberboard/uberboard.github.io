import React from "react";
import {Metadata} from "next";
import '../styles/globals.css';

export const metadata: Metadata = {
    title: 'uberboard.io',
    description: 'Welcome to uberboard.io',
    viewport: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
};

export default function RootLayout({
   children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}