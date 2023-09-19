import { useRef, Fragment } from 'react';
import styled from 'styled-components';

import { ContentSection } from "@/components/ContentSection";
import { useIsComponentVisible } from "@/hooks/useIsComponentVisible";
import { UnderlinedText } from '@/components/common/UnderlinedText';

interface ExperienceItemInterface {
    title: string;
    image: string;
    shadowColor: string;
}

const experienceItems: ExperienceItemInterface[] = [
    {
        title: 'CBT Nuggets',
        image: '/experience/cbtnuggets.png',
        shadowColor: 'rgb(255, 188, 0)',
    },
    {
        title: 'Real Time Reviews',
        image: '/experience/rtr.png',
        shadowColor: '#09405f'
    },
    {
        title: 'novoSquare',
        image: '/experience/novo.png',
        shadowColor: 'rgb(94,144,227)'
    }
];

const ExperienceItemsContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    overflow: scroll auto;
    align-items: center;
`;

const ExperienceItemWrapper = styled.div<{ $shadowColor: string }>`
    margin: 2rem 10rem 5rem 5rem;
    width: fit-content;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 40px ${(props) => props.$shadowColor};
`;

const ExperienceItemImage = styled.div<{ $image: string }>`
    width: 550px;
    height: 550px;
    border-radius: 10px;
    background-size: cover;
    background-position: 50%;
    filter: blur(1.5px);
    background-image: url(${(props) => props.$image});
`;

const ExperienceItemOverlay = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
`;

const ExperienceItem = ({ image, shadowColor }: ExperienceItemInterface) => {
    return (
        <ExperienceItemWrapper $shadowColor={shadowColor}>
            <ExperienceItemImage $image={image} />
            <ExperienceItemOverlay>
                <h2>CBT Nuggets</h2>
            </ExperienceItemOverlay>
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
                            {experienceItems.map((item) => <ExperienceItem key={item.title} {...item} />)}
                        </ExperienceItemsContainer>
                    </Fragment>
                ) : null}
            </div>
        </ContentSection>
    );
};
