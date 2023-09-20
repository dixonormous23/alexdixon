import { Fragment } from 'react';

import { ContentSection, ContentContextConsumer } from "@/components/ContentSection";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { SkillItemInterface, skillSections } from './skills';
import {
    SkillSection,
    SkillItemSection,
    SkillItemWrapper,
    SkillItemImage,
    SkillTitle
} from './styles';
import { VisibilityStyleProps } from '../../../../@types';

const SkillItem: React.FC<SkillItemInterface & VisibilityStyleProps> = ({ image, $isVisible, $delay }) => {
    return (
        <SkillItemWrapper>
            <SkillItemImage src={image} alt="skill" $isVisible={$isVisible} $delay={$delay} />
        </SkillItemWrapper>
    );
};

export const SkillsSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="skills" useVisibility keepMounted>
            <ContentContextConsumer>
                {({ isVisible }) => (
                    <Fragment>
                        <UnderlinedText text="Skills" isVisible={isVisible} />
                        {skillSections.map((section) => (
                            <SkillSection key={section.title}>
                                <SkillTitle>{section.title}</SkillTitle>
                                <SkillItemSection>
                                    {isVisible ? section.data.map((item, i) => (
                                        <SkillItem key={i} $isVisible={isVisible} $delay={i / 3} {...item} />
                                    )) : null}
                                </SkillItemSection>
                            </SkillSection>
                        ))}
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};