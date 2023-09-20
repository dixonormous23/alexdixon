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
import { DEV_DESCRIPTION } from '@/constants';

export const HeroSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId='home'>
            <HeroSectionWrapper>
                <HeroInnerWrapper>
                    <HeroGreeting>Hey there! 👋</HeroGreeting>
                    <HeroTextWrapper>
                        <UnderlinedText prefix="I'm" text="Alex Dixon" isVisible />
                    </HeroTextWrapper>
                    <TypewriterText text={DEV_DESCRIPTION} delay={20} />
                    <CallToActionWrapper>
                        <SocialLinks />
                        <DownloadResumeButton />
                    </CallToActionWrapper>
                </HeroInnerWrapper>
            </HeroSectionWrapper>
        </ContentSection>
    );
};
