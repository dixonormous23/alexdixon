import { breakpoint } from "@/styles/utils";
import styled from "styled-components";

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
    margin-top: 2rem;

    ${breakpoint('mobile')} {
        justify-content: center;
        align-items: center;
    }
`;

export const SkillItemWrapper = styled.div`
    margin-right: 2rem;
    margin-bottom: 1rem;

    ${breakpoint('mobile')} {
        display: flex;
        justify-content: center;
        margin-inline: 1rem;
    }
`;

export const SkillItemImage = styled.img`
    width: 85px;
    border-radius: 10px;

    ${breakpoint('mobile')} {
        width: 50px;
    }
`;