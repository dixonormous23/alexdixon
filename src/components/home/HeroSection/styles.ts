import styled, { keyframes } from "styled-components";

import { buildFadeIn } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";

export const HeroSectionWrapper = styled.div`
    height: 100vh;

    ${breakpoint('mobile')} {
        margin-inline: 2rem;
    }
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
    ${buildFadeIn()};
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${buildFadeIn(0.5)};

    h1 {
        font-size: 3.5rem;
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
    ${buildFadeIn(2)};

    ${breakpoint('mobile')} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;