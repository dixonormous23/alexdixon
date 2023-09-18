import { buildFadeIn, fadeInAnimation } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";
import styled, { keyframes } from "styled-components";

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
    ${buildFadeIn()};
`;

const expandUnderlineAnim = keyframes`
    from { width: 0; };
    to { width: 100%;};
`;

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${buildFadeIn(0.5)};

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
            height: 0.4rem;
            border-radius: 1rem;
            background: ${({ theme }) => theme.colors.primary};
            animation: ${expandUnderlineAnim} 1s ease;
            animation-delay: 1s;
            animation-fill-mode: forwards;
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
    ${buildFadeIn(2)};

    ${breakpoint('mobile')} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;