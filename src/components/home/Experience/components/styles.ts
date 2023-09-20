import styled from "styled-components";

import { buildFadeInOnVisible } from "@/styles/common/animations";
import { VisibilityStyleProps } from "../../../../../@types";
import { breakpoint } from "@/styles/utils";

export const ExperienceItemWrapper = styled.div<VisibilityStyleProps>`
    margin: 1rem;
    padding: 2.5rem;
    border-radius: 5px;
    width: -webkit-fill-available;
    background-color: ${({ theme }) => theme.colors.primaryDark};

    ${(props) => buildFadeInOnVisible(props.$isVisible, props.$delay)};

    ${breakpoint('mobile')} {
        padding: 1.5rem;
    }
`;

export const ExperienceItemInnerWrapper = styled.div`
    display: flex;
    align-items: baseline;

    ${breakpoint('mobile')} {
        flex-direction: column;
        align-items: center;
    }
`;

export const ExperienceItemLeftContainer = styled.div`
    padding-right: 2rem;
    width: 30%;
    height: 100%;

    strong {
        font-size: 1.2rem;
    }

    ${breakpoint('mobile')} {
        width: unset;
        margin-bottom: 1rem;
        padding-right: 0;
    }
`;

export const ExperienceItemDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;

    span {
        font-size: 1.1rem;
        font-style: italic;
        margin-left: 0.5rem;
    }
`;

export const CompanyDetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
`;

export const ExperienceItemRightContainer = styled.div`
    flex-grow: 1;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    border-left: 1px solid rgba(255,255,255,0.4);

    h3 {
        margin: 0;
    }

    p {
        line-height: 2rem;
    }

    ${breakpoint('mobile')} {
        border-left: none;
        padding-top: 2rem;
        max-width: unset;
        padding-left: 0;
        border-top: 1px solid rgba(255,255,255,0.4);
    }
`;
