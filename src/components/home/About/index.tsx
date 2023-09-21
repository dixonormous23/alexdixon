import { Fragment } from 'react';

import { ContentContextConsumer, ContentSection, ContentSectionContext } from "@/components/ContentSection";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { AboutCopyWrapper, AboutMeCopy } from "./styles";

const ABOUT_ME_COPY = `
    I'm a <b>passionate</b> React developer who thrives on crafting <b>exceptional web experiences</b>.
    With a deep love for <b>clean and efficient</b> code, I've spent the last seven years honing my skills in the world of front-end development.
    My journey began with JavaScript, and I've since embraced React as my framework of choice for building <b>dynamic, user-friendly applications<b/>.
`;

export const AboutSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="about" useVisibility>
            <ContentContextConsumer>
                {({ isVisible }) => (
                    <Fragment>
                        <UnderlinedText text="About me" isVisible={isVisible} />
                        <AboutCopyWrapper $isVisible={isVisible}>
                            <AboutMeCopy dangerouslySetInnerHTML={{ __html: ABOUT_ME_COPY }}/>
                        </AboutCopyWrapper>
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};