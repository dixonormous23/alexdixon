export interface NavItemInterface {
    label?: string;
    anchor: string;
}

export const navItems: NavItemInterface[] = [
    {
        label: 'Home',
        anchor: 'home'
    },
    {
        label: 'About',
        anchor: 'about'
    },
    {
        label: 'Skills',
        anchor: 'skills'
    },
    {
        label: 'Experience',
        anchor: 'experience'
    },
    {
        label: 'Portfolio',
        anchor: 'portfolio'
    },
    {
        label: 'Contact',
        anchor: 'contact'
    }
];
