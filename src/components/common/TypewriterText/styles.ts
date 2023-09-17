import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
    50% { opacity: 0 };
`;

export const StyledTypewriterText = styled.span`
    opacity: 0.6;
    max-width: 40%;
    min-height: 200px;
    small {
        animation: ${blinkAnimation} 1s linear infinite;
        font-size: 2rem;
    }
`;
