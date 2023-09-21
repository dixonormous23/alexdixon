import { breakpoint } from "@/styles/utils";
import styled from "styled-components";
import { VisibilityStyleProps } from "../../../../@types";
import { buildFadeInOnVisible } from "@/styles/common/animations";

export const PortfolioItemsContainer = styled.div`
    display: flex;
    margin-top: 5rem;
    flex-wrap: wrap;
    justify-content: center;
    
    ${breakpoint('mobile')} {
        margin-inline: 1rem;
        justify-content: flex-start;
    }
`;

export const PortfolioItemWrapper = styled.div<VisibilityStyleProps>`
    position: relative;
    margin-right: 4rem;
    border-radius: 10px;
    margin-bottom: 4rem;
    opacity: 0;

    ${(props) => buildFadeInOnVisible(props.$isVisible, 0.3)};

    ${breakpoint('mobile')} {
        margin-left: 1.2rem;
    }
`;

export const PortfolioItemImage = styled.div<{ $image: string, $mobilePosition?: number }>`
    background-image: url(${(props) => props.$image});
    background-size: cover;
    width: 1000px;
    height: 500px;
    border-radius: 10px;
    background-position: 50% 0%;
    background-repeat: no-repeat;

    ${breakpoint('mobile')} {
        width: 350px;
        background-position: ${(props) => props.$mobilePosition ?? 75}% 10%;
    }
`;

export const PortfolioItemDetailsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0 0 10px 10px;
    backdrop-filter: blur(6px);

    ${breakpoint('mobile')} {
        padding: 1rem;
    }
`;

export const PortfolioItemTitle = styled.strong`
    font-size: 1.8rem;
`;

export const PortfolioStackWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 1.5rem;
    }
`;