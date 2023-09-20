import styled from 'styled-components';

import { VisibilityStyleProps } from '../../../@types';
import { breakpoint } from '@/styles/utils';

export const StyledContentSection = styled.section`
    width: 100%;
    min-height: clamp(70vh, 1200px, 80vh);
    margin: 4rem auto;
    max-width: ${({ theme }) => theme.widths.contentMaxWidth};

    ${breakpoint('mobile')} {
        min-height: clamp(60vh, 1200px, 70vh);
    }
`;

export const RefWrapper = styled.div`
    min-height: inherit;
`;

export const VisibilityWrapper = styled.div<VisibilityStyleProps>`
    visibility: ${(props) => props.$isVisible ? 'visible' : 'hidden'};
`;
