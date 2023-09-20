import { createRef, useMemo, Fragment, createContext } from 'react';
import styled from 'styled-components';

import { useIsComponentVisible } from '@/hooks/useIsComponentVisible';
import { ProviderProps, VisibilityStyleProps } from '../../../@types';

const StyledContentSection = styled.section`
    width: 100%;
    min-height: clamp(70vh, 1200px, 85vh);
    margin: 4rem auto;    
    padding-inline: 2rem;
    max-width: ${({ theme }) => theme.widths.contentMaxWidth};
`;

const RefWrapper = styled.div`
    min-height: inherit;
`;

const VisibilityWrapper = styled.div<VisibilityStyleProps>`
    visibility: ${(props) => props.$isVisible ? 'visible' : 'hidden'};
`;

interface ContentSectionProps extends ProviderProps {
    anchorId: string;
    useVisibility?: boolean;
}

interface ContextInterface {
    isVisible: boolean;
}

export const ContentSectionContext = createContext(undefined as unknown as ContextInterface);

export const ContentContextConsumer = ContentSectionContext.Consumer;

export const ContentSection: React.FC<ContentSectionProps> = ({ children, anchorId, useVisibility }) => {
    const wrapperRef = createRef<HTMLDivElement>();
    const isVisible = useIsComponentVisible(wrapperRef);

    const renderChildren = useMemo(() => {
        if (useVisibility) {
            return <VisibilityWrapper $isVisible={isVisible}>{children}</VisibilityWrapper>
        }
        return <Fragment>{children}</Fragment>
    }, [children, isVisible, useVisibility]);

    return (
        <ContentSectionContext.Provider value={{ isVisible }}>
            <StyledContentSection id={anchorId}>
                <RefWrapper ref={wrapperRef}>
                    {renderChildren}
                </RefWrapper>
            </StyledContentSection>
        </ContentSectionContext.Provider>
    );
};
