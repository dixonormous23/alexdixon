import { ContentSection } from '@/components/common/ContentSection';
import { HeroSectionWrapper, HeroInnerWrapper, HeroTextWrapper } from './styles';
import { TypewriterText } from '@/components/common/TypewriterText';

const typewriterText = [
    "Professional and enthusiastic software engineer, providing expertise in ReactJS, NextJS and more.",
    "Software engineer with over 7 years experience, offering expertise in ReactJS, NextJS and more.",
    "Building beautiful websites starts with a <div> and end with <Dixon />.",
];

const buildTypewriterText = (): string => {
    return typewriterText[Math.floor(Math.random() * typewriterText.length)];
}

export const HeroSection = (): React.ReactElement => {
    return (
        <ContentSection>
            <HeroSectionWrapper>
                <HeroInnerWrapper>
                    <span>Hey there! 👋</span>
                    <HeroTextWrapper>
                        <h1>I&apos;m <strong>Alex Dixon</strong></h1>
                        <TypewriterText text={buildTypewriterText()} />
                    </HeroTextWrapper>
                </HeroInnerWrapper>
            </HeroSectionWrapper>
        </ContentSection>
    );
};
