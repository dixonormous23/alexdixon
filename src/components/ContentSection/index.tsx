import styled from 'styled-components';

import { ProviderProps } from '../../../@types';

const StyledContentSection = styled.section`
    width: 100%;
    margin: 2rem;
    min-height: 100vh;
    margin: 4rem auto;    
    padding-inline: 2rem;
    max-width: ${({ theme }) => theme.widths.contentMaxWidth};
`;

interface ContentSectionProps extends ProviderProps {
    anchorId: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children, anchorId }) => {
    return (
        <StyledContentSection id={anchorId}>
            {children}
        </StyledContentSection>
    );
};
