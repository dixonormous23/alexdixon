import { useState } from 'react';

import { Icon } from "@/components/common/Icons";
import { useScrollToComponent } from "@/hooks/useScrollToComponent";
import { NavContainer, NavInnerContainer, NavMenuButton } from "./styles";

export const Navbar = (): React.ReactElement => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const { scrollToComponent } = useScrollToComponent();

    return (
        <NavContainer>
            <NavInnerContainer>
                <div onClick={() => scrollToComponent('home')}>
                    <Icon variant="home" />
                </div>
                <NavMenuButton>
                    <Icon variant="menu" />
                </NavMenuButton>
            </NavInnerContainer>
        </NavContainer>
    )
}