export interface SkillItemInterface {
    image: string;
}

export interface SkillSectionsInterface {
    title: string;
    data: SkillItemInterface[]
}

export const languagesAndTools: SkillItemInterface[] = [
    { image: '/skills/js.png' },
    { image: '/skills/ts.png' },
    { image: '/skills/nodejs.png' },
    { image: '/skills/graphql.png' },
    { image: '/skills/swift.png' },
];

export const frameworks: SkillItemInterface[] = [
    { image: '/skills/react.png' },
    { image: '/skills/nextjs.png' },
    { image: '/skills/nestjs.png' },
    { image: '/skills/redux.png' },
    { image: '/skills/electron.png' },
    { image: '/skills/styled-components.png' },
    { image: '/skills/mui.png' },
];

export const databases: SkillItemInterface[] = [
    { image: '/skills/aws.png' },
    { image: '/skills/mongodb.svg' },
    { image: '/skills/firebase.webp' },
];

export const skillSections: SkillSectionsInterface[] = [
    {
        title: 'Languages',
        data: languagesAndTools
    },
    {
        title: 'Libraries and frameworks',
        data: frameworks
    },
    {
        title: 'Databases',
        data: databases
    }
];
