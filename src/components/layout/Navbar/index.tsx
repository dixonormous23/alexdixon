import { useState } from 'react';

import {
    NavContainer,
    NavInnerContainer,
    NavItemsWrapper,
    NavItemButton,
    NavItemLabel,
    NavItemHover
} from "./styles";

interface NavItemInterface {
    label: string;
    anchor: string;
}

const navItems: NavItemInterface[] = [
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
];

const NavbarLink = ({ label, anchor }: NavItemInterface) => {
    const onClick = () => {
        const SCROLL_OFFSET = 180;
        const anchorPosition = document.getElementById(anchor)?.getBoundingClientRect()?.top ?? null;
    
        if (anchorPosition) {
            const scrollDestination = anchorPosition - SCROLL_OFFSET + window.scrollY;
            window.scrollTo({ behavior: 'smooth', top: scrollDestination });
        }
    };

    return (
        <NavItemButton onClick={onClick}>
            <NavItemLabel>{label}</NavItemLabel>
        </NavItemButton>
    );
};

export const Navbar = (): React.ReactElement => {
    return (
        <NavContainer>
            <NavInnerContainer>
                <div>
                    <p>Navbar</p>
                </div>
                <NavItemsWrapper>
                    {navItems.map((item) => <NavbarLink key={item.anchor} {...item} />)}
                </NavItemsWrapper>
            </NavInnerContainer>
        </NavContainer>
    )
}