import { useScrollToComponent } from '@/hooks/useScrollToComponent';
import { Fragment } from 'react';
import styled from "styled-components"

interface NavbarMenuStyleProps {
    $open: boolean;
}

interface NavItemInterface {
    label?: string;
    anchor: string;
}

interface NavbarMenuProps {
    open: boolean;
    onClose?: () => void;
}

const navItems: NavItemInterface[] = [
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
];

const MenuOverlay = styled.div<NavbarMenuStyleProps>`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 0.2s;
    z-index: 100;
    pointer-events: ${(props) => props.$open ? 'all' : 'none'};
    opacity: ${(props) => props.$open ? 1 : 0};
`;

const MenuContainer = styled.div<NavbarMenuStyleProps>`
    width: 350px;
    height: 100%;
    display: flex;
    z-index: 101;
    flex-direction: column;
    position: absolute;
    right: 5rem;
    top: 2rem;
`;

const MenuItemWrapper = styled.div`
    font-size: 4rem;
    cursor: pointer;
`;

export const NavbarMenu: React.FC<NavbarMenuProps> = ({ open, onClose }) => {
    const { scrollToComponent } = useScrollToComponent();

    const onMenuItemClicked = (anchor: string) => {
        scrollToComponent(anchor);
    };

    return null;

    return (
        <Fragment>
            <MenuOverlay $open={open} onClick={onClose} />
            <MenuContainer $open={open}>
                {navItems.map((item) => (
                    <MenuItemWrapper key={item.anchor} onClick={() => onMenuItemClicked(item.anchor)} {...item}>
                        <p>{item.label}</p>
                    </MenuItemWrapper>
                ))}
            </MenuContainer>
        </Fragment>
    );
};
