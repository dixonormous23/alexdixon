import styled, { keyframes } from "styled-components";

import { buildFadeInOnVisible } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";
import { VisibilityStyleProps } from "../../../../@types";

export const expandUnderlineAnim = keyframes`
    from { width: 0; };
    to { width: 100%;};
`;

export const UnderlinedTextWrapper = styled.div<VisibilityStyleProps>`
    ${(props) => buildFadeInOnVisible(props.$isVisible ?? true)};

    ${breakpoint('mobile')} {
        text-align: center;
    };
`;

export const StyledUnderlinedText = styled.strong<{ $delay?: number; }>`
    position: relative;
    font-size: 3.5rem;
    
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.3rem;
        height: 0.4rem;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.primary};
        animation: ${expandUnderlineAnim} 1s ease;
        animation-delay: ${(props) => props.$delay ?? 1}s;
        animation-fill-mode: forwards;
    }
`;
