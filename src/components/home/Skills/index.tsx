import { useRef, Fragment } from 'react';

import { ContentSection } from "@/components/ContentSection";
import { useIsComponentVisible } from "@/utils/useIsComponentVisible";
import { UnderlinedText } from '@/components/common/UnderlinedText';

import {
    SkillSection,
    SkillItemSection,
    SkillItemWrapper,
    SkillItemImage,
    SkillTitle
} from './styles';

interface SkillItemInterface {
    image: string;
}

const languagesAndTools: SkillItemInterface[] = [
    { image: '/skills/js.png' },
    { image: '/skills/ts.png' },
    { image: '/skills/nodejs.png' },
    { image: '/skills/graphql.png' },
    { image: '/skills/swift.png' },
];

const frameworks: SkillItemInterface[] = [
    { image: '/skills/react.png' },
    { image: '/skills/nextjs.png' },
    { image: '/skills/nestjs.png' },
    { image: '/skills/redux.png' },
    { image: '/skills/electron.png' },
    { image: '/skills/styled-components.png' },
    { image: '/skills/mui.png' },
];

const databases: SkillItemInterface[] = [
    { image: '/skills/aws.png' },
    { image: '/skills/mongodb.svg' },
    { image: '/skills/firebase.webp' },
]

const SkillItem = ({ image }: SkillItemInterface) => {
    return (
        <SkillItemWrapper>
            <SkillItemImage src={image} alt="skill" />
        </SkillItemWrapper>
    );
}

export const SkillsSection = () => {
    const containerRef = useRef(null);

    const isVisible = useIsComponentVisible(containerRef);
    
    return (
        <ContentSection anchorId="about">
            <div ref={containerRef}>
                {isVisible ? (
                    <Fragment>
                        <UnderlinedText text="Skills" animationDelay={0.5} />
                        <SkillSection>
                            <SkillTitle>Languages</SkillTitle>
                            <SkillItemSection>
                                {languagesAndTools.map((item, i) => <SkillItem key={i} {...item} />)}
                            </SkillItemSection>
                        </SkillSection>
                        <SkillSection>
                            <SkillTitle>Libraries and frameworks</SkillTitle>
                            <SkillItemSection>
                                {frameworks.map((item, i) => <SkillItem key={i} {...item} />)}
                            </SkillItemSection>
                        </SkillSection>
                        <SkillSection>
                            <SkillTitle>Databases</SkillTitle>
                            <SkillItemSection>
                                {databases.map((item, i) => <SkillItem key={i} {...item} />)}
                            </SkillItemSection>
                        </SkillSection>
                    </Fragment>
                ) : null}
            </div>
        </ContentSection>
    );
};