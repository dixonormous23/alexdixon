import styled from "styled-components";

export const ExperienceItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 4rem;
    align-items: flex-start;
`;

export const ExperienceItemWrapper = styled.div`
    margin: 1rem;
    padding: 2.5rem;
    border-radius: 5px;
    width: -webkit-fill-available;
    background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export const ExperienceItemInnerWrapper = styled.div`
    display: flex;
    align-items: baseline;
`;

export const ExperienceItemLeftContainer = styled.div`
    padding-right: 2rem;
    width: 30%;
    height: 100%;

    strong {
        font-size: 1.2rem;
    }
`;

export const ExperienceItemDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;

    span {
        font-size: 1.1rem;
        font-style: italic;
        margin-left: 0.5rem;
    }
`;

export const CompanyDetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
`;

export const ExperienceItemRightContainer = styled.div`
    flex-grow: 1;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    border-left: 1px solid rgba(255,255,255,0.4);

    h3 {
        margin: 0;
    }
`;
