import { DEV_DESCRIPTION } from "@/constants";
import Head from "next/head";

export const Meta = () => {
    return (
        <Head>
            <title>Portfolio | Alex Dixon</title>
            <meta name="description" content={DEV_DESCRIPTION} />

            <meta property="og:url" content="https://alexdixon.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Portfolio | Alex Dixon" />
            <meta property="og:image" content="/favicon.ico" />
            <meta property="og:description" content={DEV_DESCRIPTION} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="alexdixon.vercel.app" />
            <meta property="twitter:url" content="https://alexdixon.vercel.app/" />
            <meta name="twitter:title" content="Portfolio | Alex Dixon" />
            <meta name="twitter:description" content={DEV_DESCRIPTION} />
            <meta name="twitter:image" content="/favicon.ico" />
        </Head>
    );
};
