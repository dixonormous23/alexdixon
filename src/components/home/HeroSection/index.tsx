import { ContentSection } from '@/components/ContentSection';
import { TypewriterText } from '@/components/common/TypewriterText';
import { SocialLinks } from '@/components/common/SocialLinks';
import { DownloadResumeButton } from '@/components/common/DownloadResumeButton';
import {
    HeroSectionWrapper,
    HeroInnerWrapper,
    HeroTextWrapper,
    HeroGreeting,
    CallToActionWrapper
} from './styles';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const TYPEWRITER_TEXT = "Experienced, results-driven Software Engineer with a proven track record of delivering cutting-edge web applications."; 

export const HeroSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId='home'>
            <HeroSectionWrapper>
                <HeroInnerWrapper>
                    <HeroGreeting>Hey there! 👋</HeroGreeting>
                    <HeroTextWrapper>
                        <h1>I&apos;m</h1>
                        <UnderlinedText text="Alex Dixon" />
                    </HeroTextWrapper>
                    <TypewriterText text={TYPEWRITER_TEXT} delay={20} />
                    <CallToActionWrapper>
                        <SocialLinks />
                        <DownloadResumeButton />
                    </CallToActionWrapper>
                </HeroInnerWrapper>
            </HeroSectionWrapper>
        </ContentSection>
    );
};
