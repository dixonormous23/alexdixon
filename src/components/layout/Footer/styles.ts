import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
`;

export const FooterInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: .5rem;
    }
`;

export const GithubRepoLinkWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
`;

export const GithubRepoLink = styled.a`
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
`;