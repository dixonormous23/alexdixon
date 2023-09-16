import styled from 'styled-components';

import { ContentSection } from '@/components/common/ContentSection';

const HeroSectionWrapper = styled.div`
    height: 100vh;
`;

export const HeroSection = (): React.ReactElement => {
    return (
        <ContentSection>
            <HeroSectionWrapper>
                <p>Hey there!</p>
                <h2>I&apos;m Alex Dixon</h2>
            </HeroSectionWrapper>
        </ContentSection>
    );
};
