import React, { Fragment } from 'react';

import { useNavbarMenuContext } from '@/context/NavbarMenuContext';
import { useScrollToComponent } from '@/hooks/useScrollToComponent';
import { navItems } from './items';
import {
    MenuOverlay,
    MenuContainer,
    MenuItemWrapper,
    MenuItemLabel,
    CloseButton
} from './styles';
import { Icon } from '@/components/common/Icons';

export const NavbarMenu = (): React.ReactElement => {
    const { open, toggleOpen } = useNavbarMenuContext();

    const { scrollToComponent } = useScrollToComponent();

    const onMenuItemClicked = (anchor: string) => {
        scrollToComponent(anchor);
        toggleOpen();
    };

    return (
        <Fragment>
            <MenuOverlay $open={open} onClick={toggleOpen} />
            <MenuContainer $open={open}>
                <CloseButton onClick={toggleOpen}>
                    <Icon variant="close" />
                </CloseButton>
                {navItems.map((item) => (
                    <MenuItemWrapper key={item.anchor} onClick={() => onMenuItemClicked(item.anchor)}>
                        <MenuItemLabel>{item.label}</MenuItemLabel>
                    </MenuItemWrapper>
                ))}
            </MenuContainer>
        </Fragment>
    );
};
