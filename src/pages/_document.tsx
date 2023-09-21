import { DEV_DESCRIPTION } from '@/constants';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@400;500;600;700&family=Permanent+Marker&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
