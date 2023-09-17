import { breakpoint } from "@/styles/utils";
import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
    height: 100vh;
    margin: auto 2rem;
`;

export const HeroInnerWrapper = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        font-size: 2rem;
    }
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 3.5rem;
    }

    strong {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }

    ${breakpoint('mobile')} {
        h1 {
            font-size: 2.7rem;
            margin-bottom: 2rem;
        }
    }
`;
