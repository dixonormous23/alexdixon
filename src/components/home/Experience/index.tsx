import { useRef, Fragment } from 'react';
import Image from 'next/image';

import { ContentSection } from "@/components/ContentSection";
import { useIsComponentVisible } from "@/hooks/useIsComponentVisible";
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { experienceItems, ExperienceItemInterface } from './experience';
import {
    ExperienceItemDetailsWrapper,
    ExperienceItemsContainer,
    ExperienceItemInnerWrapper,
    ExperienceItemLeftContainer,
    ExperienceItemWrapper,
    CompanyDetailsWrapper,
    ExperienceItemRightContainer
} from './styles';

const ExperienceItem = ({ image, companyName, jobTitle, jobDescription, timePeriod }: ExperienceItemInterface) => {
    return (
        <ExperienceItemWrapper>
            <ExperienceItemInnerWrapper>
                <ExperienceItemLeftContainer>
                    <strong>{jobTitle}</strong>
                    <ExperienceItemDetailsWrapper>
                        <CompanyDetailsWrapper>
                            <Image src={image} alt={companyName} width={20} height={20} />
                            <span>{companyName}</span>
                        </CompanyDetailsWrapper>
                        <small>{timePeriod}</small>
                    </ExperienceItemDetailsWrapper>
                </ExperienceItemLeftContainer>
                <ExperienceItemRightContainer>
                    <h3>{companyName}</h3>
                    <p>{jobDescription}</p>
                </ExperienceItemRightContainer>
            </ExperienceItemInnerWrapper>
        </ExperienceItemWrapper>
    );
};

export const ExperienceSection = () => {
    const containerRef = useRef(null);

    const isVisible = useIsComponentVisible(containerRef);

    return (
        <ContentSection anchorId="experience">
            <div ref={containerRef}>
                {isVisible ? (
                    <Fragment>
                        <UnderlinedText text="Experience" animationDelay={0.5} isVisible={isVisible} />
                        <ExperienceItemsContainer>
                            {experienceItems.map((item) => <ExperienceItem key={item.companyName} {...item} />)}
                        </ExperienceItemsContainer>
                    </Fragment>
                ) : null}
            </div>
        </ContentSection>
    );
};
