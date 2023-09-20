import { Fragment } from 'react';

import { ContentContextConsumer, ContentSection } from "@/components/ContentSection";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { ExperienceItem } from './components/ExperienceCard';
import { experienceItems } from './experience';
import { ExperienceItemsContainer } from './styles';

export const ExperienceSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="experience" useVisibility>
            <ContentContextConsumer>
                {({ isVisible }) => (                    
                    <Fragment>
                        <UnderlinedText text="Experience" isVisible={isVisible} />
                        <ExperienceItemsContainer>
                            {experienceItems.map((item, i) => (
                                <ExperienceItem key={item.companyName} $isVisible={isVisible} $delay={i} {...item} />
                            ))}
                        </ExperienceItemsContainer>
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};
