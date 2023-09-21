import styled from "styled-components";

import { breakpoint } from "@/styles/utils";

export const NavContainer = styled.nav<{ $condensed: boolean }>`
    top: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    position: fixed;
    padding: 2rem 10rem;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    height: ${(props) => props.$condensed ? 75 : 100}px;
    background-color: ${({ theme }) => theme.colors.body};

    ${breakpoint('mobile')} {
        padding: 1rem 2rem;
    }
`;

export const NavInnerContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: flex-end;
    max-width: ${({ theme }) => theme.widths.contentMaxWidth};
`;

export const NavItemsWrapper = styled.div`
    flex-grow: 1;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;