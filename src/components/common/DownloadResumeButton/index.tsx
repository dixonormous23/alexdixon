import styled from "styled-components";

const StyledDownloadButton = styled.a`
    width: fit-content;
    font-family: inherit;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.2s;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    :hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryFaded};
    }
`;

export const DownloadResumeButton = (): React.ReactElement => {
    return (
        <StyledDownloadButton download href={'/AlexDixon_Resume.pdf'}>
            Download CSV
        </StyledDownloadButton>
    );
};
