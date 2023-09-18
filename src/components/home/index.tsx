import { Fragment } from 'react';

import { HeroSection } from "./HeroSection";
import { AboutSection } from "./About";

export const HomeComponent: React.FC = () => {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
        </Fragment>
    );
};

export default HomeComponent;