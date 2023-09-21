import { Icon } from "@/components/common/Icons";
import { NavContainer, NavInnerContainer, NavMenuButton } from "./styles";
import { useNavbarMenuContext } from '@/context/NavbarMenuContext';

export const Navbar = (): React.ReactElement => {
    const { toggleOpen } = useNavbarMenuContext();

    return (
        <NavContainer>
            <NavInnerContainer>
                <NavMenuButton onClick={toggleOpen}>
                    <Icon variant="menu" />
                </NavMenuButton>
            </NavInnerContainer>
        </NavContainer>
    );
};
