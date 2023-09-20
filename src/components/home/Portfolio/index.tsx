import { Fragment } from 'react';

import { ContentContextConsumer, ContentSection } from "@/components/ContentSection"
import { UnderlinedText } from '@/components/common/UnderlinedText';

export const PortfolioSection = (): React.ReactElement => {
    return (
        <ContentSection anchorId="portfolio" useVisibility>
            <ContentContextConsumer>
                {({ isVisible }) => (
                    <Fragment>
                        <UnderlinedText text='Portfolio' isVisible={isVisible} />
                    </Fragment>
                )}
            </ContentContextConsumer>
        </ContentSection>
    );
};
