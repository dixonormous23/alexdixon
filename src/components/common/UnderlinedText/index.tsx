import styled, { keyframes } from "styled-components";

const expandUnderlineAnim = keyframes`
    from { width: 0; };
    to { width: 100%;};
`;

const StyledUnderlinedText = styled.strong<{ $animationDelay?: number }>`
    position: relative;
    font-size: inherit;
    
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
    animationDelay?: number;
}

export const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, animationDelay }) => {
    return <StyledUnderlinedText $animationDelay={animationDelay}>{text}</StyledUnderlinedText>
};
