import styled, { css } from 'styled-components';

import { breakpoint } from '@/styles/utils';

export const ContactSubheading = styled.div`
    margin: 2rem 0;

    p {
        font-size: 1.3rem;
    }

    ${breakpoint('mobile')} {
        text-align: center;
    }
`;

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    ${breakpoint('mobile')} {
        padding-inline: 2rem;
    }
`;

export const FormWrapper = styled.form`
    width: 100%;
    max-width: 700px;
`;

export const InputWrapper = styled.div`
    margin-bottom: 2rem;
`;

const sharedInputStyles = css`
    background: transparent;
    border-radius: 5px;
    outline: none;
    font-family: inherit;
    font-size: 1.5rem;
    padding: 1rem;
    color: inherit;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const InputField = styled.input`
    ${sharedInputStyles};
`;

export const MessageField = styled.textarea`
    ${sharedInputStyles};
    resize: none;
`;

export const SuccessMessage = styled.p`
    font-size: 2rem;
    text-align: center;
`;