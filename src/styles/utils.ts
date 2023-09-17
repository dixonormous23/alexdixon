import { css } from "styled-components";

type Breakpoint = 'mobile' | 'tablet';

export const breakpoint = (breakpoint: Breakpoint) => {
    return css`@media screen and (max-width: ${({ theme }) => theme.breakpoints[breakpoint]})`;
};
