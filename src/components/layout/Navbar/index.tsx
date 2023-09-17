import { NavContainer, NavInnerContainer } from "./styles";

interface NavItemInterface {
    label: string;
    anchor: string;
}

const navItems: NavItemInterface[] = [
    {
        label: 'Home',
        anchor: 'home'
    },
]

export const Navbar = (): React.ReactElement => {
    return (
        <NavContainer>
            <NavInnerContainer>
                <p>Navbar</p>
            </NavInnerContainer>
        </NavContainer>
    )
}