import { createRef, useMemo, createContext, useEffect, useState, Fragment, useContext } from 'react';

import { useIsElementVisible } from '@/hooks/useIsElementVisible';
import { ProviderProps } from '../../../@types';
import { StyledContentSection, VisibilityWrapper, RefWrapper } from './styles';

type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'portfolio' | 'contact';

interface ContentSectionProps extends ProviderProps {
    anchorId: SectionId;
    useVisibility?: boolean;
}

interface ContentSectionContextInterface {
    isVisible: boolean;
    currentSection: SectionId;
}

export const ContentSectionContext = createContext(undefined as unknown as ContentSectionContextInterface);

export const ContentContextConsumer = ContentSectionContext.Consumer;

export const ContentSection: React.FC<ContentSectionProps> = ({ children, anchorId, useVisibility }) => {
    const [currentSection, setCurrentSection] = useState<SectionId>('home');

    const wrapperRef = createRef<HTMLDivElement>();
    const isVisible = useIsElementVisible(wrapperRef);

    const renderChildren = useMemo(() => {
        if (useVisibility) {
            return <VisibilityWrapper $isVisible={isVisible}>{children}</VisibilityWrapper>
        }
        return <Fragment>{children}</Fragment>
    }, [children, isVisible, useVisibility]);

    useEffect(() => {
        if (isVisible) {
            setCurrentSection(anchorId);
        }
    }, [isVisible, anchorId]);

    return (
        <ContentSectionContext.Provider value={{ isVisible, currentSection }}>
            <StyledContentSection id={anchorId}>
                <RefWrapper ref={wrapperRef}>
                    {renderChildren}
                </RefWrapper>
            </StyledContentSection>
        </ContentSectionContext.Provider>
    );
};

export const useContentSectionContext = (): ContentSectionContextInterface => {
    return useContext(ContentSectionContext);
};
