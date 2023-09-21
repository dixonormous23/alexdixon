import { Fragment } from 'react';

import { ContentSection, ContentContextConsumer } from "@/components/ContentSection";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { SkillItemsSection } from './components/SkillSection';
import { skillSections } from './skills';

export const SkillsSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="skills" useVisibility>
            <ContentContextConsumer>
                {({ isVisible }) => (
                    <Fragment>
                        <UnderlinedText text="Skills" isVisible={isVisible} />
                        {skillSections.map((section) => <SkillItemsSection key={section.title} {...section} />)}
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};