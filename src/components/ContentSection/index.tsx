import { createRef, useMemo, Fragment, createContext } from 'react';

import { useIsComponentVisible } from '@/hooks/useIsComponentVisible';
import { ProviderProps } from '../../../@types';
import { StyledContentSection, VisibilityWrapper, RefWrapper } from './styles';

interface ContentSectionProps extends ProviderProps {
    anchorId: string;
    useVisibility?: boolean;
    keepMounted?: boolean;
}

interface ContextInterface {
    isVisible: boolean;
}

export const ContentSectionContext = createContext(undefined as unknown as ContextInterface);

export const ContentContextConsumer = ContentSectionContext.Consumer;

export const ContentSection: React.FC<ContentSectionProps> = ({ children, anchorId, useVisibility, keepMounted = false }) => {
    const wrapperRef = createRef<HTMLDivElement>();
    const isVisible = useIsComponentVisible(wrapperRef, keepMounted);

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
