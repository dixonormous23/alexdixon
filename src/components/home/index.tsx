import { Fragment } from 'react';

import { HeroSection } from "./HeroSection";
import { AboutSection } from "./About";
import { SkillsSection } from './Skills';

export const HomeComponent: React.FC = () => {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </Fragment>
    );
};

export default HomeComponent;