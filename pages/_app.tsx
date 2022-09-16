import "../styles/index.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {SessionProvider} from "next-auth/react";


function MyApp({Component, pageProps}: AppProps) {
    const {session}: any = pageProps;
    return (
        <div className="container mx-auto">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <title>SWIFTY</title>
            </Head>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    );
}

export default MyApp;
