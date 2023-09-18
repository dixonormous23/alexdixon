import { breakpoint } from "@/styles/utils";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
    50% { opacity: 0 };
`;

export const StyledTypewriterText = styled.span<{ $height: number }>`
    opacity: 0.6;
    max-width: 50%;
    line-height: 3rem;
    font-size: 2rem;
    min-height: ${(props) => props.$height}px;

    small {
        animation: ${blinkAnimation} 1s linear infinite;
        font-size: 2rem;
    }

    ${breakpoint('mobile')} {
        max-width: unset;
        font-size: 1.4rem !important;
        min-height: 250px;
    }
`;
