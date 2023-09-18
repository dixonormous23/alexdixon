import { breakpoint } from "@/styles/utils";
import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
    height: 100vh;
    margin: auto 2rem;
`;

export const HeroInnerWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HeroGreeting = styled.span`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 3.5rem;
    }

    strong {
        position: relative;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -0.3rem;
            width: 100%;
            height: 0.4rem;
            border-radius: 1rem;
            background: ${({ theme }) => theme.colors.primary};
        }
    }

    ${breakpoint('mobile')} {
        h1 {
            font-size: 2.7rem;
            margin-bottom: 2rem;
        }
    }
`;

export const CallToActionWrapper = styled.div`
    width: 100%;
    ${breakpoint('mobile')} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;