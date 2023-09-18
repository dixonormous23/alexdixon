import styled from 'styled-components';

import { ProviderProps } from '../../../@types';

const StyledContentSection = styled.section`
    width: 100%;
    margin: auto;
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
