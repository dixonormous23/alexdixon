import { breakpoint } from "@/styles/utils";
import styled from "styled-components";

interface NavbarMenuStyleProps {
    $open: boolean;
}

export const MenuOverlay = styled.div<NavbarMenuStyleProps>`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
    transition: 0.2s;
    z-index: 100;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    pointer-events: ${(props) => props.$open ? 'all' : 'none'};
    opacity: ${(props) => props.$open ? 1 : 0};
`;

export const MenuContainer = styled.div<NavbarMenuStyleProps>`
    width: 350px;
    height: 100%;
    display: flex;
    z-index: 101;
    flex-direction: column;
    position: fixed;
    opacity: 0;
    transition: 0.2s;
    top: ${(props) => props.$open ? 10 : -100}%;
    pointer-events: ${(props) => props.$open ? 'all' : 'none'};
    opacity: ${(props) => props.$open ? 1 : 0};

    ${breakpoint('mobile')} {
        top: ${(props) => props.$open ? 10 : -100}%;
    }
`;

export const MenuItemWrapper = styled.div`

`;

export const MenuItemLabel = styled.p`
    font-size: 3rem;
    cursor: pointer;
    margin: 1rem;
    text-align: center;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary} 50%, white 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 0.4s ease;

    &:hover {
        background-position: 0 100%;
    }
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    align-self: self-end;
    cursor: pointer;
`;
