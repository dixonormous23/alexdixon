import styled, { keyframes } from "styled-components";
import { breakpoint } from "@/styles/utils";
import { VisibilityStyleProps } from "../../../../@types";

export const SkillSection = styled.div`
    margin-top: 3rem;

    ${breakpoint('mobile')} {
        text-align: center;
        margin-inline: 2rem;
    }
`;

export const SkillTitle = styled.p`
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: .1em;
`;

export const SkillItemSection = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0;

    ${breakpoint('mobile')} {
        justify-content: center;
        align-items: center;
    }
`;

export const SkillItemWrapper = styled.div`
    margin-right: 2rem;
    margin-bottom: 1rem;
    transition: 0.2s;
    position: relative;
    width: 85px;
    height: 95px;

    ${breakpoint('mobile')} {
        display: flex;
        justify-content: center;
        margin-inline: 1rem;
        width: 50px;
    }
`;

const itemImageAnim = keyframes`
    from {
        opacity: 0;
        left: -100px;
    }
    to {
        opacity: 1;
        left: 0;
    }
`;

export const SkillItemImage = styled.img<VisibilityStyleProps>`
    opacity: 0;
    width: inherit;
    border-radius: 10px;
    position: absolute;
    left: -100px;
    animation: ${itemImageAnim} 1s;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.$delay}s;
`;