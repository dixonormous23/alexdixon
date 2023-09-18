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