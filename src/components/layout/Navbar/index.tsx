import { useEffect, useState, useCallback } from "react";

import { Icon } from "@/components/common/Icons";
import { useNavbarMenuContext } from '@/context/NavbarMenuContext';
import { NavContainer, NavInnerContainer, NavMenuButton } from "./styles";

const CONDENSED_BREAKPOINT = 350;

export const Navbar = (): React.ReactElement => {
    const [condensed, setCondensed] = useState<boolean>(false);

    const { toggleOpen } = useNavbarMenuContext();

    const handleScroll = useCallback(() => {
        const scrollHeight = window.scrollY;

        if (scrollHeight >= CONDENSED_BREAKPOINT) {
            setCondensed(true);
        } else {
            setCondensed(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return (
        <NavContainer $condensed={condensed}>
            <NavInnerContainer>
                <NavMenuButton onClick={toggleOpen}>
                    <Icon variant="menu" />
                </NavMenuButton>
            </NavInnerContainer>
        </NavContainer>
    );
};
