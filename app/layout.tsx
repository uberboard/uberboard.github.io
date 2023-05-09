import React from "react";
import {Metadata} from "next";
import '../styles/globals.css';
import Script from "next/script";

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
            <head>
                <Script id="etracker" type="text/javascript">
                    {
                    // var et_pagename = "";
                    // var et_areas = "";
                    // var et_tval = 0;
                    // var et_tsale = 0;
                    // var et_tonr = "";
                    // var et_basket = "";
                }
                </Script>
                <Script id="_etLoader" type="text/javascript" data-block-cookies="true" data-secure-code="6ggwSE" src="//code.etracker.com/code/e.js" async></Script>
            </head>
            <body>{children}</body>
            <Script src="/libs/termynal.js" data-termynal-container="#termynal"></Script>
        </html>
    );
}