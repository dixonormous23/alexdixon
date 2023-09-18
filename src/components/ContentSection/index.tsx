import styled from 'styled-components';

import { ProviderProps } from '../../../@types';

const StyledContentSection = styled.section`
    width: 100%;
    margin: auto;
    max-width: ${({ theme }) => theme.widths.contentMaxWidth};
`;

export const ContentSection: React.FC<ProviderProps> = ({ children }) => {
    return (
        <StyledContentSection>
            {children}
        </StyledContentSection>
    );
};
