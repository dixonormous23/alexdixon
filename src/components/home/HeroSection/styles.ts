import styled from "styled-components";

import { buildFadeIn } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";

export const HeroSectionWrapper = styled.div`
    height: 100vh;

    ${breakpoint('mobile')} {
        margin-inline: 2rem;
        height: 80vh;
    }
`;

export const HeroInnerWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${breakpoint('mobile')} {
        // align-items: center;
    }
`;

export const HeroGreeting = styled.span`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    ${buildFadeIn()};
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    margin: 2rem 0;
    ${buildFadeIn(0.5)};

    ${breakpoint('mobile')} {
        margin: 1.5rem 0;
        strong {
            font-size: 2rem;
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