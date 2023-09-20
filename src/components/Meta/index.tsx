import { DEV_DESCRIPTION } from "@/constants";
import Head from "next/head";

export const Meta = () => {
    return (
        <Head>
            <title>Portfolio | Alex Dixon</title>
            <meta name="description" content={DEV_DESCRIPTION} />
        </Head>
    );
};
