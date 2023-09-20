export interface ExperienceItemInterface {
    jobTitle: string;
    image: string;
    timePeriod: string;
    location: string;
    companyName: string;
    jobDescription: string;
}

export const experienceItems: ExperienceItemInterface[] = [
    {
        jobTitle: 'Frontend Software Developer',
        companyName: 'CBT Nuggets',
        image: '/experience/cbtnuggets.png',
        timePeriod: 'Feb 2020 - Present',
        location: 'Bend, OR | Remote',
        jobDescription: `
            Implemented clean, scalable user features, landing pages and internal tools utilizing ReactJS and TypeScript.
            Integrated CMS platforms to allow for design and marketing to create and publish content with no developer blocking time.
            Worked on multiple software projects simultaneously while participating in the full software development lifecycle from design, implementation to deployment.
        `
    },
    {
        jobTitle: 'Lead Full Stack Developer',
        companyName: 'Real Time Reviews',
        image: '/experience/rtr.png',
        timePeriod: 'Jul 2018 - Feb 2020',
        location: 'Flagstaff, AZ',
        jobDescription: `
            Designed and developed robust white-label software utilizing ReactJS, NextJS and NodeJS.
            Architected and developed external API to support dynamic partnering company integrations, with end-to-end encryption.
            Utilized AWS to create a proprietary chat bot system with two-way texting features.
        `
    },
    {
        jobTitle: 'Web & Mobile App Developer',
        companyName: 'novoSquare',
        image: '/experience/novo.png',
        timePeriod: 'May 2015 - Jul 2018',
        location: 'Atlanta, GA',
        jobDescription: `
            Developed large scale web and mobile applications in a bespoke manner for multiple clients.
            Created and integrated 3rd party APIs and apps for user analytics, Google Ads, payment processing and more.
            Worked closely with clients and stakeholders to ensure end product was at or above expectations.
        `,
    }
];