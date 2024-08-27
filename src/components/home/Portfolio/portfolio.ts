type StackType = 'aws' | 'react' | 'nextjs' | 'graphql' | 'ts' | 'firebase' | 'nodejs' | 'styled-components' | 'mui';

export interface PortfolioItemInterface {
    image: string;
    title: string;
    stack: StackType[];
    shortDescription?: string;
    mobilePosition?: number;
}

export const portfolio: PortfolioItemInterface[] = [
    {
        image: '/portfolio/cbtnuggets.png',
        title: 'CBT Nuggets',
        stack: ['nextjs', 'ts', 'graphql', 'aws'],
        shortDescription: `
            Learn IT Training on demand, anywhere, anytime.
        `
    },
    {
        image: '/portfolio/bitsim.png',
        title: 'BitSim',
        stack: ['react', 'firebase', 'ts', 'nodejs', 'styled-components'],
        mobilePosition: 0,
        shortDescription: `
            Simulated cryptocurrency trading app.
        `
    },
    {
        image: '/portfolio/flospace.png',
        title: 'FloSpace',
        stack: ['nextjs', 'ts', 'mui', 'styled-components'],
        shortDescription: `
            Conquer your online presence with lightning speed websites and better SEO.
        `
    },
    {
        image: '/portfolio/mwh.png',
        title: 'My Whole Healing',
        stack: ['nextjs', 'aws', 'nodejs', 'ts', 'styled-components'],
        mobilePosition: 90,
        shortDescription: `
            A simple website built to allow a user to book Tarot readings.
        `
    },
    {
        image: '/portfolio/alchemenow.png',
        title: 'AlcheME Now',
        stack: ['nextjs', 'ts', 'styled-components', 'graphql'],
        shortDescription: `
            Website developed for client to provide paid communication from advisor to client.
        `
    },
];
