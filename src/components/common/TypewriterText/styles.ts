import { breakpoint } from "@/styles/utils";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
    50% { opacity: 0 };
`;

export const StyledTypewriterText = styled.span`
    opacity: 0.6;
    max-width: 40%;
    min-height: 200px;
    line-height: 3rem;

    small {
        animation: ${blinkAnimation} 1s linear infinite;
        font-size: 2rem;
    }

    ${breakpoint('mobile')} {
        max-width: unset;
        font-size: 1.4rem !important;
    }
`;
