import styled from "styled-components";

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
`;

export const NavInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
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

export const NavItemHover = styled.div<{ $isActive: boolean; }>`
    position: absolute;
    transition: 0.3s;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
    z-index: 1;
    background: ${({ theme }) => theme.colors.primary};
    left: ${(props) => props.$isActive ? 0 : -100}px;
    opacity: ${(props) => props.$isActive ? 0.9 : 0};
`;

export const NavItemLabel = styled.a`
    font-size: 1rem;
`;
