import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
    from { opacity: 0 };
    to { opacity: 1 };
`;

export const buildFadeIn = (startDelay?: number) => {
    return css`
        opacity: 0;
        animation: ${fadeInAnimation} 1s ease;
        animation-delay: ${startDelay ?? 0}s;
        animation-fill-mode: forwards;
    `;
};

export const buildFadeInOnVisible = (visible: boolean, startDelay?: number) => {
    return css`
        ${visible ? buildFadeIn(startDelay) : null};
    `;
}