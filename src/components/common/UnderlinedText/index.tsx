import { buildFadeInOnVisible } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";
import styled, { keyframes } from "styled-components";

const expandUnderlineAnim = keyframes`
    from { width: 0; };
    to { width: 100%;};
`;

const UnderlinedTextWrapper = styled.div<{ $isVisible?: boolean; }>`
    ${(props) => buildFadeInOnVisible(props.$isVisible ?? true)};

    ${breakpoint('mobile')} {
        text-align: center;
    };
`;

const StyledUnderlinedText = styled.strong<{ $animationDelay?: number; }>`
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
        animation-delay: ${(props) => props.$animationDelay ?? 1}s;
        animation-fill-mode: forwards;
    }
`;

interface UnderlinedTextProps {
    text: string;
    isVisible?: boolean;
    animationDelay?: number;
}

export const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, isVisible = true, animationDelay }) => {
    return (
        <UnderlinedTextWrapper $isVisible={isVisible}>
            <StyledUnderlinedText $animationDelay={animationDelay}>{text}</StyledUnderlinedText>
        </UnderlinedTextWrapper>
    )
};
