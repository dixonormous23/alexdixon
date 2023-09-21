import { Fragment } from 'react';

import { HeroSection } from "./HeroSection";
import { AboutSection } from "./About";
import { SkillsSection } from './Skills';
import { ExperienceSection } from './Experience';
import { PortfolioSection } from './Portfolio';
import { ContactSection } from './Contact';

export const HomeComponent: React.FC = () => {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection />
            <ContactSection />
        </Fragment>
    );
};

export default HomeComponent;