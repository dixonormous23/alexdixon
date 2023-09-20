import { UnderlinedTextWrapper, StyledUnderlinedText } from "./styles";

interface UnderlinedTextProps {
    text: string;
    isVisible?: boolean;
    delay?: number;
    prefix?: string;
}

export const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text, prefix, isVisible = true, delay = 0.5 }) => {
    return (
        <UnderlinedTextWrapper $isVisible={isVisible}>
            {prefix ? <strong>{prefix}{' '}</strong> : null}
            <StyledUnderlinedText $delay={delay}>{text}</StyledUnderlinedText>
        </UnderlinedTextWrapper>
    );
};
