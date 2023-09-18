import { useRef, Fragment } from 'react';

import { ContentSection } from "@/components/ContentSection";
import { useIsComponentVisible } from "@/utils/useIsComponentVisible";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { AboutContentWrapper, AboutTitle, AboutCopyWrapper, AboutMeCopy } from "./styles";

const ABOUT_ME_COPY = `
    I'm a <b>passionate</b> React developer who thrives on crafting <b>exceptional web experiences</b>.
    With a deep love for <b>clean and efficient</b> code, I've spent the last seven years honing my skills in the world of front-end development.
    My journey began with JavaScript, and I've since embraced React as my framework of choice for building <b>dynamic, user-friendly applications<b/>.
`;

export const AboutSection = () => {
    const containerRef = useRef(null);

    const isVisible = useIsComponentVisible(containerRef);

    return (
        <ContentSection anchorId="about">
            <AboutContentWrapper ref={containerRef}>
                {isVisible ? (
                    <Fragment>
                        <AboutTitle $isVisible={isVisible}>
                            <UnderlinedText text="About me" animationDelay={0.5} />
                        </AboutTitle>
                        <AboutCopyWrapper $isVisible={isVisible}>
                            <AboutMeCopy dangerouslySetInnerHTML={{ __html: ABOUT_ME_COPY }}/>
                        </AboutCopyWrapper>
                    </Fragment>
                ) : null}
            </AboutContentWrapper>
        </ContentSection>
    );
};