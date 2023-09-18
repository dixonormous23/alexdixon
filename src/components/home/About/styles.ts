import { buildFadeInOnVisible } from "@/styles/common/animations";
import { breakpoint } from "@/styles/utils";
import styled from "styled-components";

interface VisibilityProps {
    $isVisible: boolean;
}

export const AboutContentWrapper = styled.div``;

export const AboutTitle = styled.div<VisibilityProps>`
    font-size: 3.5rem;

    ${(props) => buildFadeInOnVisible(props.$isVisible)};

    ${breakpoint('mobile')} {
        text-align: center;
    };
`;

export const AboutCopyWrapper = styled.div<VisibilityProps>`
    margin-top: 3rem;
    max-width: 65%;

    ${(props) => buildFadeInOnVisible(props.$isVisible, 0.5)};

    ${breakpoint('mobile')} {
        max-width: unset;
        margin-inline: 1rem;
    };
`;

export const AboutMeCopy = styled.p`
    font-size: 2.5rem;
    line-height: 4.5rem;

    b {
        color: ${({ theme }) => theme.colors.primary};
    }

    ${breakpoint('mobile')} {
        font-size: 1.3rem;
        line-height: 2rem;
        text-align: center;
    };
`;