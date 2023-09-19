import { useRef, Fragment } from 'react';

import { ContentSection } from "@/components/ContentSection";
import { useIsComponentVisible } from "@/hooks/useIsComponentVisible";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { SkillItemInterface, skillSections } from './skills';
import {
    SkillSection,
    SkillItemSection,
    SkillItemWrapper,
    SkillItemImage,
    SkillTitle
} from './styles';

const SkillItem = ({ image }: SkillItemInterface): React.ReactElement => {
    return (
        <SkillItemWrapper>
            <SkillItemImage src={image} alt="skill" />
        </SkillItemWrapper>
    );
};

export const SkillsSection = () => {
    const containerRef = useRef(null);

    const isVisible = useIsComponentVisible(containerRef);
    
    return (
        <ContentSection anchorId="skills">
            <div ref={containerRef}>
                {isVisible ? (
                    <Fragment>
                        <UnderlinedText text="Skills" animationDelay={0.5} />
                        {skillSections.map((section) => (
                            <SkillSection key={section.title}>
                                <SkillTitle>{section.title}</SkillTitle>
                                <SkillItemSection>
                                    {section.data.map((item, i) => <SkillItem key={i} {...item} />)}
                                </SkillItemSection>
                            </SkillSection>
                        ))}
                    </Fragment>
                ) : null}
            </div>
        </ContentSection>
    );
};