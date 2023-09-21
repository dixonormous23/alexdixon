import styled, { css } from "styled-components";

import { breakpoint } from "@/styles/utils";
import { ProviderProps } from "../../../../@types";

const ThemedButtonWrapper = styled.div`
    padding: 2rem 0;

    ${breakpoint('mobile')} {
        padding: 1rem 0;
    }
`;

const sharedStyles = css`
    width: fit-content;
    font-family: inherit;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryFaded};
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

const Anchor = styled.a`
    ${sharedStyles};
`;

const Button = styled.button`
    ${sharedStyles};
    background: transparent;
    padding: 1rem 3rem;
    color: ${({ theme }) => theme.colors.text};
`;

type ElementType = 'anchor' | 'button';

interface ThemedButtonProps {
    [x:string]: any;
    as?: ElementType;
}

export const ThemedButton: React.FC<ProviderProps & ThemedButtonProps> = ({ children, as = 'anchor', ...rest }) => {
    return (
        <ThemedButtonWrapper>
            {as === 'anchor' ? <Anchor {...rest}>{children}</Anchor> : <Button {...rest}>{children}</Button>}
        </ThemedButtonWrapper>
    );
};
