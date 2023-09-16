import styled from 'styled-components';

import { ProviderProps } from '../../../../@types';

const StyledContentSection = styled.section`
    width: 100%;
    max-width: 1250px;
    margin: auto;
`;

export const ContentSection: React.FC<ProviderProps> = ({ children }) => {
    return (
        <StyledContentSection>
            {children}
        </StyledContentSection>
    );
};
