import styled from "styled-components";

import { breakpoint } from "@/styles/utils";

export const NavContainer = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 2rem 10rem;
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

export const NavItemButton = styled.button`
    border: none;
    display: flex;
    cursor: pointer;
    transition: 0.2s;
    position: relative;
    border-radius: 5px;
    align-items: center;
    font-family: inherit;
    padding: 0.5rem 2rem;
    justify-content: center;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryFaded};
    }
`;

export const NavItemLabel = styled.a`
    font-size: 1rem;
`;

export const NavMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;