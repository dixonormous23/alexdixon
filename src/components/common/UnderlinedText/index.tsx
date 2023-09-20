import { UnderlinedTextWrapper, StyledUnderlinedText } from "./styles";

interface UnderlinedTextProps {
    text: string;
    isVisible?: boolean;
    delay?: number;
}

export const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, isVisible = true, delay = 0.5 }) => {
    return (
        <UnderlinedTextWrapper $isVisible={isVisible}>
            <StyledUnderlinedText $delay={delay}>{text}</StyledUnderlinedText>
        </UnderlinedTextWrapper>
    )
};
